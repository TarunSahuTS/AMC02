import React from "react";
import Header from "../Components/Header";
import BussinessGrowth from "../Components/BussinessGrowth";
import Circulars from "../Components/Circulars";
import QuickLinks from "../Components/QuickLinks";
import FooterUpper from "../Components/FooterUpper";
import FooterLower from "../Components/FooterLower";

function Home() {
  return (
    <>
      <Header />
      <img
        src="../Images/banner.png"
        style={{ width: "1920px", height: "753px" }}
        alt=""
      />
      <BussinessGrowth />
      <Circulars />
      <QuickLinks />
      <FooterUpper />
      <FooterLower />
    </>
  );
}

export default Home;
