import React from "react";
import "../Styles/MainSectionHomepage.css";
import StreamCard3 from "./StreamCard3";
import ReactCardCarousel from "react-card-carousel";

function MainSectionHomepage() {
  return (
    <div id="MainSectionHomepage">
      <h1 id="streamingNowHeading">STREAMING NOW</h1>
      <div id="carousel">
        <ReactCardCarousel autoplay={true} autoplay_speed={10000}>
          <StreamCard3 carouselImg={"./Images/NeonImg.svg"} />
          <StreamCard3 carouselImg={"./Images/carouselImg2.svg"} />
          <StreamCard3 carouselImg={"./Images/carouselImg3.svg"} />
        </ReactCardCarousel>
      </div>
    </div>
  );
}

export default MainSectionHomepage;
