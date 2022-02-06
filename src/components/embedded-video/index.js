import React from "react";
import ReactPlayer from "react-player/lazy";
import "./styles.css";

export default function EmbeddedVideo({ url }) {
  return (
    <div className="video-wrapper">
      <ReactPlayer width="100%" height="100%" url={url} controls />;
    </div>
  );
}
