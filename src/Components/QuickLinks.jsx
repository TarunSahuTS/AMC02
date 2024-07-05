import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function QuickLinks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <h1 className="text-2xl font-bold mt-10 ml-20 mb-3 text-cyan-900 ">
        Quick Links
      </h1>
      <div
        style={{ width: "1713px", height: "417px" }}
        className="slider-container ml-20"
      >
        <Slider {...settings}>
          <div style={{ width: "530px", height: "366.33px" }}>
            <div
              className="border-2 border-gray-200 rounded-md flex items-center justify-center"
              style={{ width: "530px", height: "227px" }}
            >
              <h1 className="font-bold text-lg">Latest Press Release</h1>
            </div>
          </div>
          <div style={{ width: "530px", height: "366.33px" }}>
            <div
              className="border-2 border-gray-200 rounded-md flex items-center justify-center"
              style={{ width: "530px", height: "227px" }}
            >
              <h1 className="font-bold text-lg">Download Brochure</h1>
            </div>
          </div>
          <div style={{ width: "530px", height: "366.33px" }}>
            <div
              className="border-2 border-gray-200 rounded-md flex items-center justify-center"
              style={{ width: "530px", height: "227px" }}
            >
              <h1 className="font-bold text-lg">Core SGF Calculator</h1>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default QuickLinks;
