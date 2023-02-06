import React from "react";
import "../Styles/MoreSection.css";
import ExploreSection from "./ExploreSection";
import TrendingSection from "./TrendingSection";
import TopStreamers from "./TopStreamers";
import NewStreamers from "./NewStreamers";

function MoreSection() {
  return (
    <div id="MoreSection">
      <ExploreSection />
      <TrendingSection />
      <TopStreamers />
      <NewStreamers />
    </div>
  );
}

export default MoreSection;
