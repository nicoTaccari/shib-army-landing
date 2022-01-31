import React from "react";
import LogoWithName from "./logo-with-name";
import "./styles.css";

import Logo from "../../assets/images/icons/Logo_with_text.webp";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-left-column">
        <LogoWithName description logo={Logo} />
        <p className="copyright">©2021 ShibArmy. All rights reserved.</p>
      </div>
      <div className="footer-right-column">
        <Link to="/">Home</Link>
        <Link to="/terms">Terms and conditions</Link>
      </div>
    </section>
  );
}
