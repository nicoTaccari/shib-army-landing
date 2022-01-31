import React from "react";
import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import "./styles.css";

function HeaderRow() {
  return (
    <div className="header-row">
      <div className="icons">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/Shibarmy__NFT"
        >
          <FaTwitter />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://discord.gg/shibarmynft"
        >
          <SiDiscord />
        </a>
      </div>
    </div>
  );
}

export default HeaderRow;