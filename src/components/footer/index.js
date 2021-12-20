import React from "react";
import { Link } from "react-router-dom";
import LogoWithName from "./logo-with-name";
import "./styles.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-left-column">
        <LogoWithName description />
        <p className="copyright">©2021 ShibArmy. All rights reserved.</p>
      </div>
      <div className="footer-right-column">
        <Link to="/">Home</Link>
        <Link to="/terms">Terms and conditions</Link>
      </div>
    </section>
  );
}
