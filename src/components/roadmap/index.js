import React from "react";
import Step from "./step";
import "./styles.css";
import AnimatedShiba from "../../assets/videos/Animation-Roadmap.mp4";

export default function Roadmap() {
  return (
    <section className="column">
      <div className="roadmap-container">
        <h2 className="roadmap-title">Roadmap</h2>
        <p className="subtitle">
          lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem
          ipsum. lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum
          lorem ipsum.
        </p>
        <div className="line">
          <div className="progression"></div>
        </div>
        <Step />
        <Step />
        <Step />
        <Step />
      </div>
      <div className="box">
        <video className="shiba" tabIndex={0} autoPlay muted playsInline>
          <source src={AnimatedShiba} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
