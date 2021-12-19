import React from "react";
import "./styles.css";
import HeaderVideo from "../../assets/videos/Banner.mp4";

export default function Header() {
  return (
    <section className="header-section">
      <video className="header-video" autoPlay loop muted playsInline poster="">
        <source src={HeaderVideo} type="video/mp4" />
      </video>
    </section>
  );
}
