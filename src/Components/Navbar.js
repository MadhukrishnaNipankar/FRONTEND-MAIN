import React from "react";
// css
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <div>
        <section id="navbar-section1">
          <section id="navbar-section1-logo">
            <img src="./Images/logo.svg" alt="Dreamify" />
          </section>
          <section id="navbar-section1-menus">
            <a href="/">HOME</a>
            <a href="/">LIVE</a>
            <a href="/">CATEGORY</a>
            <a href="/">WHAT'S NEW</a>
          </section>
        </section>
        <section id="navbar-section2">
          <section id="navbar-section2-searchBar">
            <img src="./Images/searchIcon.png" alt="." />
            <input type="text" />
          </section>
          <section id="navbar-section2-Btns">
            <input id="login" type="button" value="LOGIN" />
            <input id="signup" type="button" value="SIGN UP" />
          </section>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
