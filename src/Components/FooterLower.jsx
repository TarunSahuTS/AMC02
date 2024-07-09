import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function FooterLower() {
  return (
    <div className="bg-blue-100 py-5 px-4 md:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-center text-2xl text-cyan-900 font-bold mb-6">
          Follow Us On
        </h1>
        <div className="flex justify-center space-x-3 mb-10">
          <FaFacebookSquare size={30} color="skyblue" />
          <FaLinkedin size={30} color="skyblue" />
          <FaYoutube size={30} color="skyblue" />
          <FaInstagram size={30} color="skyblue" />
        </div>
        <div className="text-center text-gray-700 mb-4">
          <p>Copyright©2024 - AMC Repo Clearing Limited</p>
          <p>Disclaimer | Privacy Policy | Terms of Use</p>
          <p>
            All rights reserved. Best viewed in Chrome and 1920 X 1080
            resolution.
          </p>
          <p>Recommended to use latest browser versions.</p>
        </div>
      </div>
    </div>
  );
}

export default FooterLower;
