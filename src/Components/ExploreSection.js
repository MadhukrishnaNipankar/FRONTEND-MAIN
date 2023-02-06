import React from "react";
import "../Styles/ExploreSection.css";
import StreamCard1 from "../Components/StreamCard1";
function ExploreSection() {
  return (
    <div id="exploreSection">
      <div id="bgTitle">DIFFERENT STREAMS WORTH EXPLORING</div>
      <div id="exploreSectionMain">
        <div id="title">DIFFERENT STREAMS WORTH EXPLORING</div>
        <div className="exploreCards">
          <StreamCard1 />
          <StreamCard1 />
          <StreamCard1 />
          <StreamCard1 />
          <StreamCard1 />
          <StreamCard1 />
          <StreamCard1 />
          <StreamCard1 />
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;
