import React from 'react';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { ImmutableXClient, ETHTokenType } from '@imtbl/imx-sdk';

import './styles.css';

export  const  Mint = (props) => {
  const { imx_link, imx_client, setMintLoading, walletAddress, addrWhiteList, setStatus } = props;
  const [mintCount, setMintCount] = useState(1);
  const [isWhiteListed, setIsWhiteListed] = useState(false);

  const offset = (new Date().getTimezoneOffset() - 300) * 60 * 1000;
  const pubsaleTime = new Date('December 16, 2021 23:59:00').getTime() - offset;
  const presaleTime = new Date('December 16, 2021 14:00:00').getTime() - offset;

  // IMX Client

  const receiverAddress = process.env.REACT_APP_RECEIVERADDRESS;
  const maxtokens = process.env.REACT_APP_MAXTOKENS;
  const RoyaltyAddress = process.env.REACT_APP_ROYALTYADDRESS;
  const chainId = process.env.REACT_APP_CHAINID;
  const contractAddress = process.env.REACT_APP_CONTRACTADDRESS;
  const apiAddress = process.env.REACT_APP_APIADDRESS;
  const starkContractAddress = process.env.REACT_APP_STARKCONTRACTADDRESS;
  const registrationContractAddress = process.env.REACT_APP_REGCONTRACTADDRESS;
  const alchemyApiKey = process.env.REACT_APP_ALCHEMYAPIKEY;
  const tokenPrice = process.env.REACT_APP_TOKENPRICEPAYMENT;


  useEffect(() => {

    console.log("Use Effect presaleTime!")
    let curTime = new Date().getTime();
    if (curTime >= presaleTime && curTime < pubsaleTime && Array.isArray(addrWhiteList) && walletAddress != null) {
      addrWhiteList.includes(walletAddress.toString().toLowerCase()) ? setIsWhiteListed(true) : setIsWhiteListed(false);
    }

    return () => {
      console.log("Unmount presaleTime!")
    };
  }, [presaleTime, pubsaleTime, addrWhiteList, walletAddress]);



  async function onMint() {
    debugger;
    let total_list,
      available_list,
      mint_list,
      occupied_list = [];
    let linked_wallet, provider;
    let curTime = new Date().getTime();

    if (!walletAddress) {
      setStatus('Please connect your Wallet');
      return;
    }
    // Check mint is available
    if (curTime < presaleTime) {
      setStatus('Please wait for the private sale time');
      return;
    }
    // Check user is whitelisted for pre-sale
    if (curTime >= presaleTime && curTime < pubsaleTime) {
      if (curTime >= presaleTime && curTime < pubsaleTime && Array.isArray(addrWhiteList) && walletAddress != null) {
        if (!addrWhiteList.includes(walletAddress.toString().toLowerCase())) {
          setStatus('Please wait for the public sale time');
          return;
        } else {
          setIsWhiteListed(true);
        }
      }
    }
    debugger;
    setMintLoading(true);

    // Connect to Immutable-X to register user
    try {
      linked_wallet = await imx_link.setup({});
    } catch (err) {
      console.log(err);
      setMintLoading(false);
      setStatus('Wallet connection failed');
      return;
    }
    debugger;
    // Check minted token number
    let assets = [];
    let assetsRequest = await imx_client.getAssets({ user: linked_wallet.address, collection: contractAddress });
    assets = assets.concat(assetsRequest.result);
    if (assets.length + mintCount > maxtokens) {
      setMintLoading(false);
      setStatus('Exceeded max token purchase per wallet');
      return;
    }
    assetsRequest = await imx_client.getAssets({ collection: contractAddress });
    assets = assets.concat(assetsRequest.result);
    if (assets.length + mintCount > 500) {
      setMintLoading(false);
      setStatus('Purchase would exceed max supply of tokens');
      return;
    }
    debugger;
    // Get wallet balance
    let imx_balance_wei = await imx_client.getBalances({ user: linked_wallet.address });
    let imx_balance_eth = ethers.utils.formatEther(imx_balance_wei.imx);
    if (chainId === '0x3') {
      provider = ethers.getDefaultProvider('ropsten');
    } else if (chainId === '0x1') {
      provider = ethers.getDefaultProvider('mainnet');
    }
    let eth_balance_wei = await provider.getBalance(linked_wallet.address);
    let eth_balance_eth = ethers.utils.formatEther(eth_balance_wei);
    debugger;
    // Deposit ETH from wallet to Immutable-X.
    if (imx_balance_eth < tokenPrice * mintCount) {
      debugger;
      let deposit_balance = tokenPrice * mintCount;
      debugger;
      try {
        await imx_link.transfer([
          {
            amount: deposit_balance.toString(),
            type: ETHTokenType.ETH,
            toAddress: receiverAddress.toString(),
          },
        ]);
      } catch (err) {
        console.log(linked_wallet.address.toString());
        console.log(err);
        setMintLoading(false);
        setStatus('Transaction failed because you have insufficient funds in your IMX wallet.  Please go here and deposit eth - https://market.ropsten.x.immutable.com/inventory ');
        return;
      }
    }
    debugger;
    // Pay IMX token for mint NFT on immutable-x
    try {
      await imx_link.transfer([
        {
          amount: (tokenPrice * mintCount).toString(),
          type: ETHTokenType.ETH,
          toAddress: receiverAddress,
        },
      ]);
    } catch (err) {
      debugger;
      console.log(err);
      setMintLoading(false);
      setStatus('Transaction failed because you have insufficient funds on Immutable-X');
      return;
    }
    debugger;
    // Get Minter to mint NFT on Immutable-X
    let alchemy_provider;
    if (chainId === '0x3') {
      alchemy_provider = new AlchemyProvider('ropsten', alchemyApiKey);
    } else if (chainId === '0x1') {
      alchemy_provider = new AlchemyProvider('mainnet', alchemyApiKey);
    }

    const minter = await ImmutableXClient.build({
      publicApiUrl: apiAddress,
      starkContractAddress: starkContractAddress,
      registrationContractAddress: registrationContractAddress,
      signer: new Wallet(process.env.REACT_APP_MINTER_KEY).connect(alchemy_provider),
    });
    debugger;
    // Get already minted Token List
    try {
      let assetCursor;
      do {
        let assets = [];
        let assetsRequest = await imx_client.getAssets({ collection: contractAddress, cursor: assetCursor });
        assets = assets.concat(assetsRequest.result);
        assets.map((asset) => occupied_list.push(parseInt(asset.token_id)));
        assetCursor = assetsRequest.cursor;
      } while (assetCursor);
    } catch (err) {
      setStatus('Immutable-X interaction failed.');
      setMintLoading(false);
      return;
    }
    debugger;
    // Get available mint id
    total_list = Array.from(Array(500).keys());
    total_list.shift();
    available_list = total_list.filter((id) => !occupied_list.includes(id));
    let shuffled = available_list.sort(function () {
      return 0.5 - Math.random();
    });
    mint_list = shuffled.slice(0, mintCount);

    // Mint NFT token on Immutable-X
    const tokens = mint_list.map((i) => ({
      id: i.toString(),
      blueprint: 'https://bucket-shibarmy.s3.us-east-1.amazonaws.com/',
    }));

    const payload = [
      {
        contractAddress: contractAddress,

        royalties: [
          // multiple recipients

          {
            //  owner
            recipient: RoyaltyAddress.toLowerCase(),
            percentage: 5,
          },
        ],

        users: [
          {
            etherKey: linked_wallet.address.toLowerCase(),
            tokens: tokens,
          },
        ],
        // globally set royalties
      },
    ];

    try {
      debugger;
      const result = await minter.mintV2(payload);
      console.log(result);
      setStatus(`You minted ${mintCount} Shib Army Successfully.  View your mint in a few minutes here https://market.x.immutable.com/inventory `);
      setMintLoading(false);
      debugger;
    } catch (err) {
      console.log(err);
      debugger;

      setStatus('Mint on Immutable X failed');

      setMintLoading(false);
    }
  }

  return (
    <section className="about-container">
      <div>
        <button disabled className="primary-button" onClick={() => onMint()}>
          WHITELIST-SALE MINT
        </button>
      </div>

      <div>
        {' '}

      </div>
    </section>
  );
};
