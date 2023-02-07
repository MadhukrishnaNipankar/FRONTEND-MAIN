import React from "react";
import "../../Styles/Login/Login.css";

function Login() {
  return (
    <div id="loginPage">
      <div id="loginImg">
        <img src="./Images/Login/loginImg.svg" alt="Login To Dreamify.Pro" />
      </div>
      <div id="loginForm">
        <div id="loginForm-logo">
          <img src="./Images/logo.svg" alt="" />
        </div>
        <div id="loginHere">LOGIN HERE</div>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <input type="button" value="Login" />
        <span>Remember Me</span>
        <span>Forgotten Password</span>
      </div>
    </div>
  );
}

export default Login;
