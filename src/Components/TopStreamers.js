import React from "react";
import StreamCard2 from "./StreamCard2";
import "../Styles/TopStreamers.css";

function TopStreamers() {
  return (
    <div id="topStreamers">
      <div id="topStreamers-bgTitle">TOP STREAMERS</div>
      <div id="topStreamersMain">
        <div id="topStreamers-title">TOP STREAMERS</div>
        <div className="topStreamersCards">
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

export default TopStreamers;
