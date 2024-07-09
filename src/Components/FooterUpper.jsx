import React from "react";

function FooterUpper() {
  return (
    <div className="bg-sky-900 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-screen-xl flex flex-wrap justify-between text-white">
        <ul className="mb-6 md:mb-0 md:mr-10">
          <li className="font-bold mb-2">About Us</li>
          <li className="mb-1">Page</li>
          <li className="mb-1">Page</li>
          <li className="mb-1">Page</li>
        </ul>
        <ul className="mb-6 md:mb-0 md:mr-10">
          <li className="font-bold mb-2">Product & Service</li>
          <li className="mb-1">Page</li>
          <li className="mb-1">Page</li>
          <li className="mb-1">Page</li>
        </ul>
        <ul className="mb-6 md:mb-0 md:mr-10">
          <li className="font-bold mb-2">Membership</li>
          <li className="mb-1">Page</li>
          <li className="mb-1">Page</li>
          <li className="mb-1">Page</li>
        </ul>
        <ul className="mb-6 md:mb-0 md:mr-10">
          <li className="font-bold mb-2">Disclosures</li>
          <li className="mb-1">Page</li>
          <li className="mb-1">Page</li>
          <li className="mb-1">Page</li>
        </ul>
        <ul className="mb-6 md:mb-0 md:mr-10 border-r-0 md:border-r-2 border-white pr-0 md:pr-10">
          <li className="font-bold mb-2">Resource</li>
          <li className="mb-1">Page</li>
          <li className="mb-1">Page</li>
          <li className="mb-1">Page</li>
        </ul>
        <ul className="max-w-full md:max-w-sm text-sm md:text-base">
          <li className="font-bold mb-2">Corporate Address</li>
          <li className="mb-1">
            AMC Repo Clearing Limited Unit No. 503, Windsor, Off CST Road,
            Kalina, Santacruz East, Mumbai 400098
          </li>
          <li className="mb-1">
            CIN: U65929MH2021PLC3591081 GSTIN: 27AAVCA1159N1Z0 www.arclindia.com
          </li>
          <li className="mb-1">Toll Free Number 1800 XX XX XXX</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterUpper;
