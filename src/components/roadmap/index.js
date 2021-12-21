import React from "react";
import Phase1 from "./phase1";
import Phase2 from "./phase2";
import Phase3 from "./phase3";
import Phase4 from "./phase4";
import "./styles.css";
import AnimatedShiba from "../../assets/videos/Animation-Roadmap.mp4";

export default function Roadmap() {
  return (
    <section className="column">
      <div className="roadmap-container">
        <h2 className="roadmap-title">ROADMAP</h2>
        <div className="line">
          <div className="progression"></div>
          <div className="dot">
            <div className="shape done"></div>
          </div>
        </div>
        <Phase1 />
        <Phase2 />
        <Phase3 />
        <Phase4 />
      </div>
      {/* <div className="box">
        <video className="shiba" tabIndex={0} autoPlay muted playsInline>
          <source src={AnimatedShiba} type="video/mp4" />
        </video>
      </div> */}
    </section>
  );
}
