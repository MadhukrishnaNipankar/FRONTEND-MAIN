import React from "react";
import "../Styles/Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid mx-3">
          <NavLink to="/">
            {/* <a className="navbar-brand" href="/"> */}
            <img
              src="./Images/logo.svg"
              alt="Dreamify"
              width="150"
              height="70"
              className="d-inline-block align-text-top"
            />
            {/* </a> */}
          </NavLink>
          <button
            style={{ border: "none" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
              style={{ border: "none" }}
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>
          <div
            className="collapse navbar-collapse mx-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  LIVE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  CATEGORY
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  WHAT'S NEW
                </a>
              </li> */}
            </ul>
            <div className="input-group mx-3" id="searchInputContainer">
              <span className="input-group-text">
                <img src="./Images/searchIcon.png" alt="." />
              </span>
              <input type="text" className="form-control" />
            </div>
            <NavLink to="/login">
              <button
                type="button"
                className="btn mx-3"
                style={{ color: "white" }}
              >
                LOGIN
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button
                type="button"
                className="btn px-3 py-2 mx-1"
                style={{ color: "white", backgroundColor: "#F58C1F" }}
              >
                SIGNUP
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
