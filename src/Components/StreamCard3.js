import React from "react";
import "../Styles/StreamCard3.css";

function StreamCard3({ carouselImg }) {
  return (
    <div className="streamCard3">
      <section id="streamCard3-img">
        <img src={carouselImg} alt="Streaming Now.." />
      </section>

      <section id="streamCard3-metaSection">
        <div id="metaSection-channelImg">
          <img src="./Images/profile.svg" alt="..." />
        </div>
        <div id="metaSection-metaDesc">
          <span id="metaSection-metaDesc-title">
            Valorant Rank Push | Road to 1K subs
          </span>
          <div id="seperator-line"></div>
          <span id="channel-name">Killjoy Gaming</span>
        </div>
      </section>
    </div>
  );
}

export default StreamCard3;
