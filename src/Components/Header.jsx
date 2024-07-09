import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../Images/amc_repo.png";
import { CiMenuKebab } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center px-4 py-2 md:px-10 md:py-4 lg:px-20 lg:py-6 w-full">
        <div className="flex-shrink-0">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="w-24 h-20 md:w-32 md:h-28" />
          </Link>
        </div>

        <div className="flex-grow flex flex-col justify-between items-center mx-4">
          <div className="lg:mr-80 flex items-center w-full justify-end mb-2 md:mb-4 0">
            <label className=" flex items-center gap-2 border-2 p-2 rounded-md w-full max-w-xl bg-white">
              <CiSearch size={20} />

              <input
                type="text"
                className="flex-grow outline-none"
                placeholder="Search"
              />
            </label>
            <div className="mx-2 md:mx-4">{"|"}</div>
            <div className="flex items-center">
              <IoMdContact className="md:mx-2" size={30} />
              <h1 className="text-lg hidden md:block">
                Login here for the reports
              </h1>
            </div>
          </div>

          {/* Header Items */}
          <div className="hidden md:flex self-end items-center space-x-20 text-lg uppercase">
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About Us
            </Link>
            <Link
              to="/product-and-services"
              className="text-gray-700 hover:text-blue-500"
            >
              Product & Services
            </Link>
            <Link
              to="/membership"
              className="text-gray-700 hover:text-blue-500"
            >
              Membership
            </Link>
            <Link
              to="/disclosures"
              className="text-gray-700 hover:text-blue-500"
            >
              Disclosures
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-500">
              Resources
            </Link>
            <IoMenu size={30} />
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center justify-end self-end mr-5">
            <CiMenuKebab size={30} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 text-lg uppercase bg-gray-100 p-4">
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About Us
          </Link>
          <Link
            to="/product-and-services"
            className="text-gray-700 hover:text-blue-500"
          >
            Product & Services
          </Link>
          <Link to="/membership" className="text-gray-700 hover:text-blue-500">
            Membership
          </Link>
          <Link to="/disclosures" className="text-gray-700 hover:text-blue-500">
            Disclosures
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-blue-500">
            Resources
          </Link>
        </div>
      )}
      <hr />
    </>
  );
}

export default Header;
