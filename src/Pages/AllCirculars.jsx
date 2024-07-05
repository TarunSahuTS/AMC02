import React from "react";
import Header from "../Components/Header";
import FooterUpper from "../Components/FooterUpper";
import FooterLower from "../Components/FooterLower";
import { MdOutlineDateRange } from "react-icons/md";
import CircularsTable from "../Components/CircularsTable";

function AllCirculars() {
  return (
    <>
      <Header />
      <div className="">
        <img
          src="../../Images/c1.png"
          alt=""
          style={{ width: "1920px", height: "214px" }}
        />
        <h1 className="text-4xl font-bold mt-5 ml-20 mb-3">Circulars</h1>
        <p className="ml-20">
          Download the latest circulars. Search for Archived circulars using the
          Advanced Filters
        </p>
        <h1 className="text-2xl font-bold mt-5 ml-20 mb-3">Latest Circulars</h1>

        {/* Filter Bar */}
        <div className="flex space-x-2 ml-20 mb-5 items-center justify-between">
          <div>
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
          </div>
          <div>
            <button className="bg-gray-300 rounded-md p-2">
              Search by Subject
            </button>
          </div>
          <div>Or</div>
          <div>
            <label
              className="input input-bordered flex items-center gap-2 border-2 p-1 rounded-md w-96 bg-white"
              style={{ width: "300px", height: "40px" }}
            >
              <MdOutlineDateRange />

              <input type="text" className="grow" placeholder="From" />
            </label>
          </div>
          <div>
            <label
              className="input input-bordered flex items-center gap-2 border-2 p-1 rounded-md w-96 bg-white"
              style={{ width: "300px", height: "40px" }}
            >
              <MdOutlineDateRange />

              <input type="text" className="grow" placeholder="To" />
            </label>
          </div>
          <div className="">
            <button className="bg-gray-300 rounded-md p-2 mr-10">
              Search by Subject
            </button>
          </div>
        </div>
      </div>
      <CircularsTable />
      <FooterUpper />
      <FooterLower />
    </>
  );
}

export default AllCirculars;
