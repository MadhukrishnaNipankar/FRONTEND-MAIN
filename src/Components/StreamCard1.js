import React from "react";
import "../Styles/StreamCard1.css";

function StreamCard1() {
  return (
    <div className="streamCard1">
      <div className="streamImage">
        <img
          src="./Images/gamingImg.svg"
          className="card-img-top"
          alt="LIVE..."
        />
      </div>

      <div className="streamMetaData">
        <div className="streamViews">
          <span className="streamViewsNumber">150K</span>
          <span className="streamViewsStatus">Watching</span>
        </div>

        <span className="markFavourite">
          <img src="./Images/Fav.svg" alt="Fav" />
        </span>
      </div>
      <div className="seperationLine"></div>
      <div className="streamCategory">Gaming</div>
    </div>
  );
}

export default StreamCard1;
