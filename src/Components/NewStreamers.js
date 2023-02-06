import React from "react";
import StreamCard2 from "./StreamCard2";
import "../Styles/NewStreamers.css";

function NewStreamers() {
  return (
    <div id="newStreamers">
      <div id="newStreamers-bgTitle">NEW STREAMERS</div>
      <div id="newStreamersMain">
        <div id="newStreamers-title">NEW STREAMERS</div>
        <div className="newStreamersCards">
          <StreamCard2 trendingImg={`./Images/trendingImg.svg`} />
          <StreamCard2 trendingImg={`./Images/trendingImg2.svg`} />
          <StreamCard2 trendingImg={`./Images/trendingImg3.svg`} />
          <StreamCard2 trendingImg={`./Images/trendingImg4.svg`} />
          <StreamCard2 trendingImg={`./Images/trendingImg.svg`} />
          <StreamCard2 trendingImg={`./Images/trendingImg3.svg`} />
          <StreamCard2 trendingImg={`./Images/trendingImg4.svg`} />
          <StreamCard2 trendingImg={`./Images/trendingImg2.svg`} />
        </div>
      </div>
    </div>
  );
}

export default NewStreamers;
