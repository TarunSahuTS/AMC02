import React from "react";
import { Link } from "react-router-dom";
import pdfIcon from "../../Images/pdf.png"; // Ensure the path is correct

function Circulars() {
  return (
    <div className="flex justify-center px-4 md:px-10 lg:px-20 py-4">
      <div className="w-full max-w-screen-xl">
        <h1 className="text-2xl font-bold mt-10 mb-6 text-cyan-900  self-start">
          Circulars
        </h1>

        <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-5">
          {/* Box 1 */}
          <div className="bg-blue-100 flex flex-col justify-between p-5 rounded-lg shadow-sm w-full lg:w-1/3">
            <div className="flex justify-between text-lg">
              <h1>Operations</h1>
              <h1>07-June-2024</h1>
            </div>
            <h1 className="mt-5 text-lg">Reference No.</h1>
            <div className="flex flex-col items-center text-center text-3xl mt-5 font-bold sm:mb-5 md:mb-10">
              <h1>Transaction Charges for Tri-party Repo</h1>
            </div>
            <div className="flex justify-center mt-5">
              <img src={pdfIcon} alt="Download" className="w-10 h-10 mr-1" />
              <button className="bg-sky-900 font-bold text-white px-4 py-2 text-lg rounded-md">
                DOWNLOAD
              </button>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-blue-100 flex flex-col justify-between p-5 rounded-lg shadow-sm w-full lg:w-1/3">
            <div className="flex justify-between text-lg">
              <h1>Operations</h1>
              <h1>07-June-2024</h1>
            </div>
            <h1 className="mt-5 text-lg">Reference No.</h1>
            <div className="flex flex-col items-center text-center text-3xl mt-5 font-bold sm:mb-5 md:mb-10">
              <h1>Transaction Charges for Tri-party Repo</h1>
            </div>
            <div className="flex justify-center mt-5">
              <img src={pdfIcon} alt="Download" className="w-10 h-10 mr-1" />
              <button className="bg-sky-900 font-bold text-white px-4 py-2 text-lg rounded-md">
                DOWNLOAD
              </button>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-blue-100 flex flex-col justify-between p-5 rounded-lg shadow-sm w-full lg:w-1/3">
            <div className="flex justify-between text-lg">
              <h1>Operations</h1>
              <h1>07-June-2024</h1>
            </div>
            <h1 className="mt-5 text-lg">Reference No.</h1>
            <div className="flex flex-col items-center text-center text-3xl mt-5 font-bold sm:mb-5 md:mb-10">
              <h1>Transaction Charges for Tri-party Repo</h1>
            </div>
            <div className="flex justify-center mt-5">
              <img src={pdfIcon} alt="Download" className="w-10 h-10 mr-1" />
              <button className="bg-sky-900 font-bold text-white px-4 py-2 text-lg rounded-md">
                DOWNLOAD
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Link to="/all-circulars">
            <button className="border-2 px-4 py-2 border-cyan-900 font-bold text-cyan-900 rounded-md">
              View All Circulars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Circulars;
