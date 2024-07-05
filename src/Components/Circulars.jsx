import React from "react";
import { Link } from "react-router-dom";

function Circulars() {
  return (
    <div className="flex justify-center">
      <div className="" style={{ width: "1758px", height: "521px" }}>
        <h1 className="text-2xl font-bold mt-10  mb-3 text-cyan-900 ">
          Circulars
        </h1>

        <div
          className="flex justify-between"
          style={{ width: "1713px", height: "417px" }}
        >
          {/* Box 1 */}
          <div
            className="bg-blue-100"
            style={{ width: "530px", height: "417px" }}
          >
            <div className="flex justify-between px-5 mt-5 text-lg">
              <h1>Operations</h1>
              <h1>07-June-2024</h1>
            </div>
            <h1 className=" mt-5 px-5 text-lg">Reference No.</h1>
            <div className="flex text-center justify-center items-center text-3xl mx-24 mt-20 font-bold">
              <h1>Transaction Charges for Tri-party Repo</h1>
            </div>
            <div className="flex justify-center mt-20">
              <img
                src="../../Images/pdf.png"
                alt=""
                height={"50px"}
                width={"50px"}
                className="mr-2"
              />
              <button className="bg-sky-900 font-bold text-white p-4 text-lg rounded-md">
                DOWNLOAD
              </button>
            </div>
          </div>

          {/* Box 2 */}
          <div
            className="bg-blue-100"
            style={{ width: "530px", height: "417px" }}
          >
            <div className="flex justify-between px-5 mt-5 text-lg">
              <h1>Operations</h1>
              <h1>07-June-2024</h1>
            </div>
            <h1 className=" mt-5 px-5 text-lg">Reference No.</h1>
            <div className="flex text-center justify-center items-center text-3xl mx-24 mt-20 font-bold">
              <h1>Transaction Charges for Tri-party Repo</h1>
            </div>
            <div className="flex justify-center mt-20">
              <img
                src="../../Images/zip.png"
                alt=""
                height={"50px"}
                width={"50px"}
                className="mr-2"
              />
              <button className="bg-sky-900 font-bold text-white p-4 text-lg rounded-md">
                DOWNLOAD
              </button>
            </div>
          </div>

          {/* Box 3 */}
          <div
            className="bg-blue-100"
            style={{ width: "530px", height: "417px" }}
          >
            <div className="flex justify-between px-5 mt-5 text-lg">
              <h1>Operations</h1>
              <h1>07-June-2024</h1>
            </div>
            <h1 className=" mt-5 px-5 text-lg">Reference No.</h1>
            <div className="flex text-center justify-center items-center text-3xl mx-24 mt-20 font-bold">
              <h1>Transaction Charges for Tri-party Repo</h1>
            </div>
            <div className="flex justify-center mt-20">
              <img
                src="../../Images/pdf.png"
                alt=""
                height={"50px"}
                width={"50px"}
                className="mr-2"
              />
              <button className="bg-sky-900 font-bold text-white p-4 text-lg rounded-md">
                DOWNLOAD
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="/all-circulars">
            <button className="border-2 p-2 m-4 mr-16 border-cyan-900 font-bold text-cyan-900">
              View All Circulars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Circulars;
