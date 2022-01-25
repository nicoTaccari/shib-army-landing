import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { connectWallet, getCurrentWalletConnected } from './components/mint/interact';
import { whiteList } from './components/mint/whitelist';
import { linkAddress, apiAddress } from './components/mint/address';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ImmutableXClient, Link } from '@imtbl/imx-sdk';

import { HeaderRow } from './components/header-row';
import Roadmap from './components/roadmap';
import Header from './components/header';
import Gallery from './components/gallery';
import About from './components/about';
import Footer from './components/footer';
import Team from './components/team';
import Profiles from './components/profiles';
import { Mint } from './components/mint';


const App = () => {


  const [walletAddress, setWalletAddress] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setMintLoading] = useState(false);
  const [tokenPrice, setTokenPrice] = useState(null);
  const [addrWhiteList, setAddrWhiteList] = useState(null);

  // IMX Client
  const [client, setClient] = useState(null);
  const link = new Link(linkAddress);

  useEffect(() => {
    console.log("Use Effect! whiteList")
    let whitelist = whiteList.map((addr) => addr.toString().toLowerCase());
    setAddrWhiteList(whitelist);
    return () => {
      // actions to be performed when component unmounts
      console.log("Unmount whiteList.ma ")
  
    };
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    console.log("Use Effect! ImmutableXClient")
    setClient(await ImmutableXClient.build({ publicApiUrl: apiAddress }));
    const { address, status } = await getCurrentWalletConnected();
    console.log(address);
    setWalletAddress(address);
    setStatus(status);

    return () => {
      // actions to be per formed when component unmounts
      console.log("Unmount ImmutableXClient.build")

    };
  }, []);




  useEffect(() => {
 
    console.log("useEffect notify")

    const notify = () => toast.info(status, {
      position: "bottom-right",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    if (status) {
      notify()
      setStatus(null)
    }

    return () => {
      // actions to be per formed when component unmounts
      console.log("Unmount notify.build")

    };
  }, [status])




  const onClickConnectWallet = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWalletAddress(walletResponse.address);
  };

  const onClickDisconnectWallet = async () => {
    setWalletAddress(null);
  };

  return (
    <div>
    
      <HeaderRow
        onClickDisconnectWallet={onClickDisconnectWallet}
        onClickConnectWallet={onClickConnectWallet}
        walletAddress={walletAddress}
      />
      <Header />

      <Mint
        imx_link={link}
        imx_client={client}
        loading={loading}
        setMintLoading={setMintLoading}
        walletAddress={walletAddress}
        tokenPrice={tokenPrice}
        addrWhiteList={addrWhiteList}
        setStatus={setStatus}
      />
 <ToastContainer />
     <About />
      <Roadmap />
      <Gallery />
      <Team />
       <Profiles />
      <Footer /> 
     


    </div>
  );
};

export default App;
