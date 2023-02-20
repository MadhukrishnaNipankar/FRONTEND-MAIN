import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/Login/Signup.css";

function Signup() {
  return (
    <div className="d-flex" id="signupPage">
      <section
        id="signup-img-container"
        style={{ width: "60vw", minHeight: "100vh", height: "fitContent" }}
      >
        <img
          src="./Images/Login/loginImg.svg"
          alt="Login To Dreamify.Pro"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </section>
      <section id="signupSection">
        <div className="d-flex flex-column" id="signupFormContainer">
          {/* Dreamify Logo */}
          <NavLink to="/">
            <div
              style={{ maxWidth: "30rem", maxHeight: "8rem", margin: "auto" }}
            >
              <img src="./Images/logo.svg" alt="" />
            </div>
          </NavLink>
          <h1 className="my-5" style={{ fontWeight: "700" }}>
            SIGNUP HERE
          </h1>
          <div
            className="my-3 form-control userNameContainer signupInputContainer"
            style={{ border: "none" }}
          >
            <input
              type="text"
              id=""
              placeholder="USERNAME"
              style={{ border: "none", width: "70%", height: "100%" }}
            />
          </div>
          <div
            className="my-3 form-control MobileNoContainer signupInputContainer"
            style={{ border: "none" }}
          >
            <input
              type="number"
              id=""
              placeholder="MOBILE NO."
              style={{ border: "none", width: "70%", height: "100%" }}
            />
          </div>
          <div
            className="my-3 form-control passwordContainer signupInputContainer"
            style={{ border: "none" }}
          >
            <input
              type="password"
              id=""
              placeholder="PASSWORD"
              style={{ border: "none", width: "70%", height: "100%" }}
            />
          </div>
          <div
            className="my-3 form-control confPasswordContainer signupInputContainer"
            style={{ border: "none" }}
          >
            <input
              type="password"
              id=""
              placeholder="CONFIRM PASSWORD"
              style={{ border: "none", width: "70%", height: "100%" }}
            />
          </div>
          <button
            className="my-3 align-self-center"
            id="signupButton"
            type="button"
          >
            Signup
          </button>
        </div>
      </section>
    </div>
  );
}

export default Signup;
