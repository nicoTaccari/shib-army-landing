import React from "react";
import ReactPlayer from "react-player/lazy";
const youtubeVideo = "https://www.youtube.com/watch?v=duDhHnARCS0";

export default function EmbeddedVideo() {
  return (
    // Render a YouTube video player
    <ReactPlayer width={"inherit"} url={youtubeVideo} controls />
  );
}
