import React, { useEffect, useState } from "react";
import "./styles.css";

import { ethers } from "ethers";
import contract from "./../../contracts/NFTExample.json";

const contractAddress = "0x355638a4eCcb777794257f22f50c289d4189F245";
const abi = contract.abi;

export default function HeaderButton() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [waitingMint, setWaitingMint] = useState(false);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have MetaMask installed");
    } else {
      console.log("Wallet exists. Ready to go");
    }

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    if (accounts.length !== 0) {
      const account = accounts[0];
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        setWaitingMint(true);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);

        console.log("Initialize payment");
        let nftTx = await nftContract.mintNFTs(1, {
          value: ethers.utils.parseEther("0.01"),
        });

        console.log("Mining...Please wait");
        await nftTx.wait();
        setWaitingMint(false);

        console.log(
          `Minted, see transaction at https://rinkeby.etherscan.io/tx/${nftTx.hash}`
        );
      } else {
        console.log("ethereum object does not exist");
      }
    } catch (error) {
      setWaitingMint(false);
      console.log(error);
    }
  };

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className="header-button">
        Connect Wallet
      </button>
    );
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  if (!currentAccount) {
    return connectWalletButton();
  }

  return (
    <button
      onClick={mintNftHandler}
      disabled={waitingMint}
      className="header-button"
    >
      {waitingMint ? "Waiting Mint" : "Mint NFT"}
    </button>
  );
}
