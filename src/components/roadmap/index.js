import React from "react";
import Step from "./step";
import "./styles.css";

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
    </section>
  );
}
