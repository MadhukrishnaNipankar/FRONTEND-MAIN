import React from "react";
import "../Styles/ExploreSection.css";
import StreamCard1 from "../Components/StreamCard1";
function ExploreSection() {
  return (
    <div id="exploreSection">
      <div id="bgTitle"></div>
      <div id="title">Different streams worth exploring</div>
      <div className="exploreCards">
        <StreamCard1 />
        <StreamCard1 />
        <StreamCard1 />
        <StreamCard1 />
        <StreamCard1 />
        <StreamCard1 />
      </div>
    </div>
  );
}

export default ExploreSection;
