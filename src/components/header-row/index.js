import React from "react";
import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import "./styles.css";

function HeaderRow() {
  return (
    <div className="header-row">
      {/* <LogoWithName logo={LogoWhite} /> */}

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
          href="https://discord.gg/K88Rn2D9y8"
        >
          <SiDiscord />
        </a>
      </div>
    </div>
  );
}

export default HeaderRow;
