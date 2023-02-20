import React from "react";
import "../Styles/Footer.css";
function Footer() {
  return (
    <div id="footer">
      <div id="footer-line"></div>
      <div id="footer-main" className=" d-flex flex-wrap">
        <section id="logo" className=" m-3 ">
          <img src="./Images/logo.svg" alt="Dreamify" />
        </section>
        <section className=" m-3 ">
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
        </section>
        <section className=" m-3 ">
          <span>About Us</span>
          <span>Contact Us</span>
        </section>
        <section className=" m-3 ">
          <span>OUR SOCIALS</span>
          <span>icons here</span>
        </section>
      </div>
    </div>
  );
}

export default Footer;
