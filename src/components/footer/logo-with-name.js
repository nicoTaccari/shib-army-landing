import React from "react";
export default function LogoWithName({ description, logo }) {
  return (
    <div className="logo-column">
      <div className="logo-row">
        <div className="logo">
          <img src={logo} alt="shiba logo" className="footer-logo" />
        </div>
      </div>
      {description && (
        <p className="description">
          8,216 unique shibas ready to make profits.
        </p>
      )}
    </div>
  );
}
