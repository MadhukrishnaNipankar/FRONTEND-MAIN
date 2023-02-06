import React from "react";
import StreamCard2 from "../Components/StreamCard2";
import "../Styles/TrendingSection.css";

function TrendingSection() {
  return (
    <div id="trendingSection">
      <div id="trending-bgTitle">TRENDING</div>
      <div id="trendingSectionMain">
        <div id="trending-title">TRENDING</div>
        <div className="trendingCards">
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

export default TrendingSection;
