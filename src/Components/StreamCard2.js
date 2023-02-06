import React from "react";
import "../Styles/StreamCard2.css";

function StreamCard2({ trendingImg }) {
  return (
    <div className="streamCard2">
      <img src={trendingImg} alt="loading..." />
    </div>
  );
}

export default StreamCard2;
