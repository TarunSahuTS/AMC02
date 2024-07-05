import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function FooterLower() {
  return (
    <>
      <div
        className="bg-blue-100 flex-col pt-5 "
        style={{ width: "1920px", height: "328px" }}
      >
        <div>
          <h1 className="text-center text-2xl text-cyan-900 font-bold">
            Follow Us On
          </h1>
        </div>
        <div className="flex justify-center space-x-3 mb-10 mt-10">
          <FaFacebookSquare size={30} color="skyblue" />
          <FaLinkedin size={30} color="skyblue" />
          <FaYoutube size={30} color="skyblue" />
          <FaInstagram size={30} color="skyblue" />
        </div>
        <div>
          <h1 className="text-center ">
            Copyright©2024 - AMC Repo Clearing Limited
          </h1>
        </div>
        <div>
          <h1 className="text-center ">
            Disclaimer | Privacy Policy | Terms of Use
          </h1>
        </div>
        <div>
          <h1 className="text-center ">
            All rights reserved. Best viewed in Chrome and 1920 X 1080
            resolution.
          </h1>
        </div>
        <div>
          <h1 className="text-center ">
            Recommended to use latest browser versions.
          </h1>
        </div>
      </div>
    </>
  );
}

export default FooterLower;
