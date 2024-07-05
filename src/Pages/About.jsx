import React from "react";
import Header from "../Components/Header";
import FooterLower from "../Components/FooterLower";
import FooterUpper from "../Components/FooterUpper";

function About() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div>About Page</div>
      </div>
      <FooterUpper />
      <FooterLower />
    </>
  );
}

export default About;
