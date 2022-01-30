import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import './styles.css';




export const HeaderRow = ({ onClickConnectWallet, onClickDisconnectWallet, walletAddress }) => {



  return (
    <div className="header-row">
      <div></div>
      <div className="icons">
        {walletAddress ? (

          <div >
            <button type="submit" onClick={onClickDisconnectWallet}>
              {' '}
              {walletAddress.slice(0, 11)}...{' '}
            </button>
          </div>

        ) : (

          <div>
            <button type="submit" onClick={onClickConnectWallet}>
              {' '}
              CONNECT{' '}
            </button>
          </div>


        )}

        <a rel="referrer  noreferrer" target="_blank" href="https://twitter.com/Shibarmy__NFT">
          <FaTwitter />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://discord.gg/K88Rn2D9y8"
        >
          <SiDiscord />
        </a>
      </div>
    </div>
  );
};
