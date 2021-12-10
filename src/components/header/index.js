import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <video className="header-video" autoPlay loop muted>
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        type="video/mp4"
      />
    </video>
  );
}
