import React from "react";
import "../Styles/Footer.css";
function Footer() {
  return (
    <div id="footer">
      <div id="footer-line"></div>
      <div id="footer-main">
        <section id="logo">
          <img src="./Images/logo.svg" alt="Dreamify" />
        </section>
        <section>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
        </section>
        <section>
          <span>About Us</span>
          <span>Contact Us</span>
        </section>
        <section>
          <span>OUR SOCIALS</span>
          <span>icons here</span>
        </section>
      </div>
    </div>
  );
}

export default Footer;
