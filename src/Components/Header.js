import React from "react";
import "./Header.css";
import punklogo from "../assets/punklogo.jpg";
import searchIcon from "../assets/search.png";
import themeSwitch from "../assets/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punklogo} className="punklogo" alt="" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="search" />
        </div>
        <input className="searchInput" />
      </div>

      <div className="headerItem">
        <p>Drops</p>
        <p>Marketplcae</p>
        <p>Create</p>
      </div>

      <div className="headerAcions">
        <div className="themeSwitchContainer">
          <img src={themeSwitch} alt="theme switch" />
        </div>

        <div className="loginButton">GET IN</div>
      </div>
    </div>
  );
};

export default Header;
