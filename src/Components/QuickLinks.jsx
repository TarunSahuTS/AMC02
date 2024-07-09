import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from "react-router-dom";
import pdfIcon from "../../Images/pdf.png"; // Ensure the path is correct

function QuickLinks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex justify-center px-4 md:px-10 lg:px-20 py-4">
        <div className="w-full max-w-screen-xl">
          <h1 className="text-2xl font-bold mt-10 mb-6 text-cyan-900  self-start">
            Quick Links
          </h1>

          <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-5">
            <div className="w-full max-w-screen-xl mx-auto">
              <Slider {...settings}>
                <div className="px-2">
                  <div className="border-2 border-gray-200 rounded-md flex items-center justify-center h-56 md:h-64 lg:h-72">
                    <h1 className="font-bold text-lg text-center">
                      Latest Press Release
                    </h1>
                  </div>
                </div>
                <div className="px-2">
                  <div className="border-2 border-gray-200 rounded-md flex items-center justify-center h-56 md:h-64 lg:h-72">
                    <h1 className="font-bold text-lg text-center">
                      Download Brochure
                    </h1>
                  </div>
                </div>
                <div className="px-2">
                  <div className="border-2 border-gray-200 rounded-md flex items-center justify-center h-56 md:h-64 lg:h-72">
                    <h1 className="font-bold text-lg text-center">
                      Core SGF Calculator
                    </h1>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickLinks;
