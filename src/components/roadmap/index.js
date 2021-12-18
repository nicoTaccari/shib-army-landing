import React from "react";
import Phase1 from "./phase1";
import Phase2 from "./phase2";
import Phase3 from "./phase3";
import Phase4 from "./phase4";
import "./styles.css";

export default function Roadmap() {
  return (
    <section className="column">
      <div className="roadmap-container">
        <h2 className="roadmap-title">Roadmap</h2>
        <p className="subtitle">
        This roadmap outlines our goals and where we want to take ShibArmy. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!
        </p>
        <div className="line">
          <div className="progression"></div>
        </div>
        <Phase1 />
        <Phase2 />
        <Phase3 />
        <Phase4 />
      </div>
    </section>
  );
}
