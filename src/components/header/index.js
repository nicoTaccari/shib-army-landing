import React from "react";
import "./styles.css";
import HeaderVideo from "../../assets/videos/Banner.mp4";
import { VideoScroll } from "react-video-scroll";

export default function Header() {
  return (
    <section className="header-section">
      <VideoScroll playbackRate={130}>
        <video
          className="header-video"
          tabIndex="0"
          autobuffer="autobuffer"
          preload="preload"
          muted
          playsInline
        >
          <source src={HeaderVideo} type="video/mp4" />
        </video>
      </VideoScroll>
    </section>
  );
}
