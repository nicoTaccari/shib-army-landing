import React from "react";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

export default function Profile({ name, image, position, content }) {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="profile-info-column">
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
        <div className="profile-content">
          <h3>{position}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
