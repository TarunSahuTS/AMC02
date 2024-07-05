import React from "react";
import { IoMdContact } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        style={{ width: "1920px", height: "142px" }}
        className="flex  items-center "
      >
        <div className=" self-center ml-10">
          <Link to={"/"}>
            <img
              src="../Images/amc_repo.png"
              alt=""
              style={{ width: "129px", height: "111px" }}
            />
          </Link>
        </div>
        <div
          style={{ height: "111px" }}
          className=" w-full ml-80 mr-10 flex flex-col justify-between"
        >
          <div style={{ height: "50px" }} className="w-full flex items-center">
            <label
              className="input input-bordered flex items-center gap-2 border-2 p-1 rounded-md w-96 bg-white"
              style={{ width: "630px", height: "40px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="text" className="grow" placeholder="Search" />
            </label>
            <div className="mx-10">{"|"}</div>
            <IoMdContact className="mx-2" size={30} />
            <h1 className="text-lg">Login here for the reports</h1>
          </div>

          <div
            style={{ height: "50px" }}
            className="w-full  flex items-center space-x-40 text-lg uppercase"
          >
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
        </div>
      </div>
    </>
  );
}

export default Header;
