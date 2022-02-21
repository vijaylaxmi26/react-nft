import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punklogo} className="punklogo" alt="" />
      </div>
    </div>
  );
};

export default Header;
