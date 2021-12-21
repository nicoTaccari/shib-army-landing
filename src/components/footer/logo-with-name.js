import React from "react";

import Logo from "../../assets/images/icons/Logo_with_text.png";

export default function LogoWithName({ description }) {
  return (
    <div className="logo-column">
      <div className="logo-row">
        <div className="logo">
          <img src={Logo} alt="shiba logo" className="footer-logo"/>
        </div>
        {/* <h2 className="footer-name">Shiba Army</h2> */}
      </div>
      {description && (
        <p className="description">
          8,216 unique shibas ready to make profits.
        </p>
      )}
    </div>
  );
}
