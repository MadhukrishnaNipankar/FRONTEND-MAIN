import React from "react";
import "../Styles/ProfilePage.css";
import ProfileFormComponent from "./ProfileFormComponent";

function ProfilePage() {
  return (
    <div className="profilePage d-flex flex-column">
      <div id="headBgContainer">
        <div
          id="profileCircle"
          className="border rounded-circle"
          style={{
            height: "20vw",
            width: "20vw",
            backgroundColor: "#D9D9D9",
            position: "relative",
            top: "12vh",
            left: "3vw",
          }}
        ></div>
        <div
          id="metaDataContainer"
          className="d-flex flex-wrap justify-content-between"
          style={{
            minWidth: "20rem",
            width: "70vw",
            justifySelf: "flex-end",
            position: "relative",
            top: "5vh",
          }}
        >
          <div
            id="userNameContainer"
            className="mb-5 d-flex flex-column align-items-start mx-3"
          >
            <h2
              style={{
                borderBottom: "3px solid white",
                paddingBottom: "2px",
                borderRadius: "1px",
                fontWeight: "800",
              }}
            >
              USERNAME
            </h2>
            <span id="joiningStatus">Joined Today </span>
          </div>

          <div id="metaData" className="d-flex flex-column align-items-start">
            <div className="mb-1">
              <span className="mx-2">Profile</span>{" "}
              <img src="./Images/ProfilePage/profile.svg" alt="" />
            </div>
            <div className="mb-1">
              <span className="mx-2">Likes</span>{" "}
              <img src="./Images/ProfilePage/Like.svg" alt="" />
            </div>
            <div className="mb-1">
              <span className="mx-2">Peaches</span>{" "}
              <img src="./Images/ProfilePage/peaches.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-5 d-flex flex-column align-self-end align-items-start"
        id="instructionContainer"
        style={{ width: "70vw" }}
      >
        <h4 style={{ fontWeight: "800", letterSpacing: "3px" }}>
          ENTER YOUR INFO
        </h4>
        <p
          className="text-start"
          style={{ fontSize: "2.5vh", letterSpacing: "1px" }}
        >
          FILL UP ALL YOUR DETAILS SO WE COULD DELIVER YOU THE BEST EXPERIENCE
        </p>
      </div>
      <ProfileFormComponent />
    </div>
  );
}

export default ProfilePage;
