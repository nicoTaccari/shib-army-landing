import React from "react";
import "./styles.css";
import "../../App.css";

export default function Header() {
  return (
    <section>
      <video autoPlay loop muted playsInline poster="">
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
