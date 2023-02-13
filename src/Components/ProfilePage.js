import React from "react";
import "../Styles/ProfilePage.css";

function ProfilePage() {
  return (
    <div id="profilePage">
      <div id="upperBackground"></div>
      <div id="userData">
        <div className="userImg"></div>
        <div className="metaData">
          <div className="userName">USERNAME</div>
          <div className="joiningStatus">Joined Today</div>
        </div>
        <div id="impressionDetails">
          <div id="profiles">
            <span>Profiles</span>
            <img
              src="./Images/ProfilePage/Group 12.svg"
              alt=""
              style={{ width: "1rem" }}
            />
          </div>
          <div id="likes">
            <span>Likes</span>
            <img
              src="./Images/ProfilePage/Vector.svg"
              alt=""
              style={{ width: "1rem" }}
            />
          </div>
          <div id="peaches">
            <span>Peaches</span>
            <img
              src="./Images/ProfilePage/Group 12 (1).svg"
              alt=""
              style={{ width: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
