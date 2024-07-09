import React from "react";
import Header from "../Components/Header";
import FooterUpper from "../Components/FooterUpper";
import FooterLower from "../Components/FooterLower";
import { MdOutlineDateRange } from "react-icons/md";
import CircularsTable from "../Components/CircularsTable";
import BannerImg from "../../Images/c1.png";

function AllCirculars() {
  return (
    <>
      <Header />
      <div className="px-4 md:px-10 lg:px-20">
        <img
          src={BannerImg}
          alt=""
          className="w-full"
          style={{ maxWidth: "1920px", height: "214px" }}
        />
        <h1 className="text-4xl font-bold mt-5 md:ml-20 mb-3">Circulars</h1>
        <p className="md:ml-20">
          Download the latest circulars. Search for Archived circulars using the
          Advanced Filters
        </p>
        <h1 className="text-2xl font-bold mt-5 md:ml-20 mb-3">
          Latest Circulars
        </h1>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between md:ml-20 mb-5 space-y-2 md:space-y-0 md:space-x-2">
          <div className="w-full md:w-96">
            <label className="input input-bordered flex items-center gap-2 border-2 p-1 rounded-md bg-white">
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
              <input
                type="text"
                className="w-full outline-none"
                placeholder="Search"
              />
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-gray-300 rounded-md p-2">
              Search by Subject
            </button>
            <div>Or</div>
          </div>
          <div className="flex space-x-2">
            <label className="input input-bordered flex items-center gap-2 border-2 p-1 rounded-md bg-white w-full md:w-96">
              <MdOutlineDateRange />
              <input
                type="text"
                className="w-full outline-none"
                placeholder="From"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 border-2 p-1 rounded-md bg-white w-full md:w-96">
              <MdOutlineDateRange />
              <input
                type="text"
                className="w-full outline-none"
                placeholder="To"
              />
            </label>
          </div>
          <button className="bg-gray-300 rounded-md p-2 ml-auto md:mr-10">
            Search by Subject
          </button>
        </div>
      </div>
      <CircularsTable />
      <FooterUpper />
      <FooterLower />
    </>
  );
}

export default AllCirculars;
