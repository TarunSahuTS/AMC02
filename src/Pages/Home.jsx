import React from "react";
import Header from "../Components/Header";
import BannerImg from "../../Images/banner.png";
import BussinessGrowth from "../Components/BussinessGrowth";
import Circulars from "../Components/Circulars";
import QuickLinks from "../Components/QuickLinks";
import FooterLower from "../Components/FooterLower";
import FooterUpper from "../Components/FooterUpper";

function Home() {
  return (
    <>
      <Header />
      <div className="w-full">
        <img
          src={BannerImg}
          alt="Banner"
          className="w-full h-auto md:h-96 lg:h-[753px] object-cover"
        />
        <BussinessGrowth />
        <Circulars />
        <QuickLinks />
        <FooterUpper />
        <FooterLower />
      </div>
    </>
  );
}

export default Home;
