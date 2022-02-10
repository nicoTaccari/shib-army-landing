import React, { useState, useEffect } from "react";
import { Link, ImmutableXClient, ETHTokenType } from '@imtbl/imx-sdk';
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { formatUnits } from '@ethersproject/units';
import { ethers } from "ethers";
import moment from "moment";

import Spinner from "../spinner";
import "./styles.css";

import logoMetaMask from '../../assets/images/icons/metamask.svg';
import logoImmutableX from '../../assets/images/icons/immutable-x.svg';

export default function Minter({ contractAddress, presaleDate, saleDate, totalTokens, presaleMintPrice, mintPrice, presaleWhitelist, presaleMaxMintAmount, tokenShuffleRounds, salesAddress, royaltiesAddress }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const [presaleIn, setPresaleIn] = useState(undefined);
  const [presaleActive, setPresaleActive] = useState(false);
  const [saleActive, setSaleActive] = useState(false);
  const [wallet, setWallet] = useState(null);

  const [balanceL1, setBalanceL1] = useState(0);
  const [balanceL2, setBalanceL2] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0.0);
  const [mintAmount, setMintAmount] = useState(1);

  const [mintedTokenIds, setMintedTokenIds] = useState([]);
  const [ownedTokens, setOwnedTokens] = useState([]);

  const [client, setClient] = useState(undefined);
  const link = new Link(process.env.REACT_APP_LINK_URL);
  const { ethereum } = window;


  /**
   * Init, timed logic
  **/
  useEffect(() => {
    const initializeImxClient = async () => {
      try {
        const publicApiUrl = process.env.REACT_APP_ENV_URL;
        const client = await ImmutableXClient.build({publicApiUrl});
        setClient(client);
        setTimeout(refreshMintedTokenIds, 1, client);
        setInterval(refreshMintedTokenIds, 60000, client); // 60s
      } catch (error) {
        setError(error);
      }
    }
    initializeImxClient();
  }, []);


  // determine (pre)sale active, countdown
  useEffect(() => {
    const refreshActive = () => {
      const now = moment();
      const newPresaleActive = now >= presaleDate && now < saleDate;
      const newSaleActive = now >= saleDate;
      if (newPresaleActive !== presaleActive) {
        setPresaleActive(newPresaleActive);
      }
      if (newSaleActive !== saleActive) {
        setSaleActive(newSaleActive);
      }
      if (now < presaleDate) {
        setPresaleIn(presaleDate.fromNow());
      } else {
        if(presaleIn) {
          setPresaleIn(undefined);
        }
      }
    }
    refreshActive();
    const interval = setInterval(refreshActive, 1000);
    return () => { clearInterval(interval) }
  }, []);

  const refreshMintedTokenIds = async (client) => {
    const mintedTokenIds = await retrieveMintedTokenIds(client);
    setMintedTokenIds(mintedTokenIds);
  }

  const retrieveMintedTokenIds = async (client) => {
    try {
      let tokenIds = [];
      let assetCursor;
      do {
        let assetsRequest = await client.getAssets({ collection: contractAddress, cursor: assetCursor });
        assetsRequest.result.forEach((asset) => tokenIds.push(parseInt(asset.token_id)));
        assetCursor = assetsRequest.cursor;
      } while (assetCursor);
      return tokenIds;
    } catch (error) {
      setError(error);
      return;
    }
  }

  const retrieveOwnedTokens = async (client) => {
    if (!wallet) {
      throw Error("Walled not connected!");
    }
    try {
      let tokens = [];
      let assetCursor;
      do {
        let assetsRequest = await client.getAssets({ collection: contractAddress, user: wallet, cursor: assetCursor });
        assetsRequest.result.forEach((asset) => tokens.push(asset));
        assetCursor = assetsRequest.cursor;
      } while (assetCursor);
      return tokens;
    } catch (error) {
      setError(error);
      return;
    }
  }

  const initializeMinterClient = async () => {
    const network = process.env.REACT_APP_NETWORK;
    const alchemyApiKey = process.env.REACT_APP_ALCHEMY_API_KEY;
    const alchemyProvider = new AlchemyProvider(network, alchemyApiKey);
    const minterClient = await ImmutableXClient.build({
      publicApiUrl: process.env.REACT_APP_ENV_URL,
      starkContractAddress: process.env.REACT_APP_STARK_CONTRACT_ADDRESS,
      registrationContractAddress: process.env.REACT_APP_REGISTRATION_ADDRESS,
      signer: new Wallet(process.env.REACT_APP_MINTER_KEY).connect(alchemyProvider),
    });
    return minterClient;
  }

  /**
   * Step handlers
  **/

  const connectWalletHandler = async () => {
    setLoading(true);
    setError(undefined);
    try {
      if (!ethereum) {
        throw Error("Please install Metamask!");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const wallet = accounts[0];

      if (presaleActive) {
        if (!presaleWhitelist.includes(wallet.toString().toLowerCase())) {
          throw Error(`Your wallet (${wallet}) is not on a whitelist!`);
        }
      }

      setWallet(wallet);
      setStep(2);

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const connectImmutableXHandler = async () => {
    setLoading(true);
    setError(undefined);
    try {
      if (!ethereum) {
        throw Error("Please install Metamask!");
      }

      const res = await link.setup({})
      const wallet = res.address;
      setWallet(wallet);

      const provider = new ethers.providers.Web3Provider(ethereum);
      const balanceL1BigNumber = await provider.getBalance(wallet);
      setBalanceL1(parseFloat(formatUnits(balanceL1BigNumber, "ether")));

      const balanceL2Object = await client.getBalance({user: wallet, tokenAddress: 'eth'});
      setBalanceL2(parseFloat(formatUnits(balanceL2Object.balance, "ether")));

      setStep(3);

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const depositHandler = async () => {
    setLoading(true);
    setError(undefined);
    try {

      await link.deposit({
          type: ETHTokenType.ETH,
          amount: depositAmount.toString(),
      });

      setBalanceL1(balanceL1 - depositAmount);
      setBalanceL2(balanceL2 + depositAmount);

      setStep(4);

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const mintHandler = async () => {
    setLoading(true);
    setError(undefined);
    try {
      if (!presaleActive && !saleActive) {
        throw Error("Sale not open!");
      }
      if (!client) {
        throw Error("ImmutableX client failed to initialize!");
      }

      const mintedTokenIds = await retrieveMintedTokenIds(client);
      const fullTokenIds = Array.from(Array(500+1).slice(1).keys());
      let availableTokenIds = fullTokenIds.filter((tokenId) => !mintedTokenIds.includes(tokenId));

      if (availableTokenIds.length < mintAmount) {
        throw Error(`Not enought NFTs remain to mint ${mintAmount}!`);
      }

      if (presaleActive) {
        const ownedTokens = await retrieveOwnedTokens(client);
        if (ownedTokens.length + mintAmount > presaleMaxMintAmount) {
          throw Error("You already reached maximum amount of tokens you are able to mint");
        }
      }

      for (let i = 0; i<tokenShuffleRounds; i++) {
        availableTokenIds = availableTokenIds.sort(function () {
          return 0.5 - Math.random();
        });
      }
      const mintTokenIds = availableTokenIds.slice(0, mintAmount);

      const currentPrice = presaleActive ? presaleMintPrice : mintPrice;
      await link.transfer([
        {
          amount: (currentPrice * mintAmount).toString(),
          type: ETHTokenType.ETH,
          toAddress: salesAddress,
        },
      ]);

      const minterClient = await initializeMinterClient();
      await minterClient.mintV2([
        {
          users: [
            {
              etherKey: wallet.toLowerCase(),
              tokens: mintTokenIds.map(tokenId => (
                {
                  id: tokenId.toString(),
                  blueprint: tokenId.toString(),
                }
              )),
            }
          ],
          contractAddress: contractAddress,
          royalties: [
            {
              recipient: royaltiesAddress,
              percentage: 4.0,
            }
          ],
        }
      ]);

      const ownedTokens = await retrieveOwnedTokens(client);
      setOwnedTokens(ownedTokens);
      setStep(5);

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  /**
   * Visuals
  **/

  const currentPrice = presaleActive ? presaleMintPrice : mintPrice;
  const stepProgress = Math.min(100, 12.5 + (step-1) * 25);
  const ableToMint = Math.floor(balanceL2/currentPrice);
  const maxMintAmount = presaleActive ? presaleMaxMintAmount : 100;

  const stepsTabs = (
    <>
      <div className="minter-progress">
        <progress id="file" value={stepProgress} max="100"> {stepProgress}% </progress>
      </div>
      <div className="minter-steps">
        <button onClick={() => setStep(1)} disabled={step < 1}>Connect Wallet</button>
        <button onClick={() => setStep(2)} disabled={step < 2}>Unlock ImmutableX</button>
        <button onClick={() => setStep(3)} disabled={step < 3}>Funds</button>
        <button onClick={() => setStep(4)} disabled={step < 4}>Start Minting</button>
      </div>
    </>
  )

  const step1 = (
    <>
      <p>
        To mint a Shiba Inu you must first install MetaMask, a crypto wallet. To learn more about MetaMask, see their <a href="https://metamask.io/faqs/">FAQ</a> or head directly to the <a href="https://metamask.io/download/">Download</a> page. You can easily buy Ethereum with a debit card or Apple Pay directly within MetaMask.
      </p>
      <div className="action">
        <button onClick={connectWalletHandler}>
          Connect MetaMask Wallet <img src={logoMetaMask} alt="MetaMask logo" />
        </button>
      </div>
    </>
  )

  const step2 = (
    <>
      <p>
        Shiba Warriors live on ImmutableX, a layer 2 for NFTS on Ethereum. To ensure we can mint your Shiba Inus and deliver to your wallet you must first unlock IMX using the same wallet address as your MetaMask payment. Once your transaction is confirmed, your Shiba Inu will be minted directly to your ImmutableX wallet, in your IMX Inventory.
      </p>
      <p>
        Wallet: {wallet}
      </p>
      <div className="action">
        <button onClick={connectImmutableXHandler}>
          Unlock ImmutableX <img src={logoImmutableX} alt="ImmutableX logo" />
        </button>
      </div>
    </>
  )

  const step3 = (
    <>
      <p>
        You need to deposit your ETH into ImmutableX wallet to be able to use it to mint NFTs.
      </p>
      <dl>
        <dt>ETH balance:</dt>
        <dd>{balanceL1} ETH</dd>
        <dt>ImmutableX balance:</dt>
        <dd>{balanceL2} ETH</dd>
      </dl>
      {
        (ableToMint === 0) &&
        <p>You do not have enought ETH deposited to mint any NFTs at the moment. Please deposit some.</p>
      }
      {
        (ableToMint > 0) &&
        <p>You have enought ETH deposited to mint {ableToMint} NFTs.</p>
      }
      <div className="action">
        <input
          type="number"
          value={depositAmount}
          onChange={e => setDepositAmount(e.target.value)}
          min={Math.max(0, currentPrice - balanceL2)}
          step="any"
          style={{marginLeft: 0}}
        />
        <button onClick={depositHandler}>
          Deposit
        </button>
      </div>
      <div className="action">
        <button onClick={() => setStep(4)} disabled={ableToMint === 0} className="action">
          Continue
        </button>
      </div>
    </>
  )

  const step4 = (
    <>
      <p>
        How many Shiba Inus do you want to mint?
      </p>
      <div className="action">
        <button onClick={() => setMintAmount(Math.max(1, mintAmount-1))}>-</button>
        <input
          type="number"
          value={mintAmount}
          onChange={e => setMintAmount(e.target.value)}
          step={1}
        />
        <button onClick={() => setMintAmount(Math.min(maxMintAmount, mintAmount+1))}>+</button>
      </div>
      <div className="action">
        <button onClick={mintHandler} className="action">
          Mint
        </button>
      </div>
    </>
  )

  const step5 = (
    <>
      <p className="mint-success">
        {mintAmount} Shiba Inu{mintAmount > 1 ? 's' : ''} successfully minted!
      </p>
      <div className="owned-tokens">
        {ownedTokens && ownedTokens.map(token => (
          <div key={token.id}>
            <img src={token.image_url} alt={token.name} />
            <p>{token.name}</p>
          </div>
        ))}
      </div>
    </>
  )

  const steps = [step1, step2, step3, step4, step5];

  const showLoading = (
    <div className="minter-loading">
      <Spinner />
    </div>
  )

  var content;
  if ((mintedTokenIds && mintedTokenIds.length) >= totalTokens) {
    content = (
      <>
        <header>
          <h2>
            Sold out!
          </h2>
        </header>
        <p>
          You can head to marketplace to get your Shiba Inu:
        </p>
        <div className="action">
          <a href={`https://market.x.immutable.com/assets?collection=${contractAddress}`}>
            <span>ImmutableX marketplace</span>
            <img src={logoImmutableX} alt="ImmutableX logo" />
          </a>
        </div>
      </>
    );
  } else if (!presaleActive && !saleActive) {
    content = (
      <>
        <header>
          <h2>
            Mint not yet open
          </h2>
        </header>
        <p>Sale opens {presaleIn} at 2022-02-09 16:00 UTC</p>
      </>
    )
  } else {
    content = (
      <>
        <header>
          <h2>
            {presaleActive ? 'Whitelisted presale' : 'Public sale'}
          </h2>
          {stepsTabs}
        </header>
        <div className="mint-status">
          <div>Step {Math.min(4, step)}/4</div>
          <div>{mintedTokenIds && mintedTokenIds.length} / {totalTokens} minted</div>
        </div>
        {loading ? showLoading : steps[step-1]}
      </>
    )
  }

  return (
    <div className="minter">
      {content}
      {error && (
        <p className="mint-error">
          {error.toString()}
        </p>
      )}
    </div>
  );
}
