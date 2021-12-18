import React from "react";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

export default function Profile({ border, name, image }) {
  return (
    <div
      className={
        border ? "profile-container border-right" : "profile-container"
      }
    >
      <div className="profile-info">
        <h2>{name}</h2>
        <div className="icons-container">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <SiInstagram />
          </a>
        </div>
      </div>
      <img src={image} alt="hawk" />
    </div>
  );
}
