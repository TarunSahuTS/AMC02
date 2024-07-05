import React from "react";

function FooterUpper() {
  return (
    <>
      <div
        className="bg-sky-900 flex justify-center items-center"
        style={{ width: "1920px", height: "513px" }}
      >
        <div className="flex justify-between">
          <ul className="ml-20 text-white">
            <li className="font-bold">About Us</li>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </ul>
          <ul className="ml-20 text-white">
            <li className="font-bold">Product & Service</li>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </ul>
          <ul className="ml-20 text-white">
            <li className="font-bold">Membership</li>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </ul>
          <ul className="ml-20 text-white">
            <li className="font-bold">Disclosures</li>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </ul>
          <ul className="ml-20 text-white border-r-2 border-white pr-10">
            <li className="font-bold">Resourse</li>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </ul>
          <ul
            style={{ width: "499px", height: "216px" }}
            className="ml-20 mr-20 text-white "
          >
            <li className="font-bold">Corporate Address</li>
            <li>
              AMC Repo Clearing Limited Unit No. 503, Windsor, Off CST Road,
              Kalina, Santacruz East, Mumbai 400098{" "}
            </li>
            <li>
              CIN: U65929MH2021PLC3591081 GSTIN: 27AAVCA1159N1Z0
              www.arclindia.com
            </li>
            <li>Toll Free Number 1800 XX XX XXX</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterUpper;
