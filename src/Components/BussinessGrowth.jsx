import React from "react";
import TableHistory from "./TableHistory";
import TableCurrent from "./TableCurrent";

function BusinessGrowth() {
  return (
    <div className="flex justify-evenly px-4 md:px-10 lg:px-10 py-4">
      <div className="w-full max-w-screen-xl flex flex-col justify-center">
        <h1 className="text-2xl font-bold mt-10 mb-6 text-cyan-900 text-center self-start">
          Business Growth
        </h1>

        <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-5">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-2 text-center lg:text-left">CURRENT</h1>
            <div className="border border-blue-100 p-4 rounded-lg shadow-sm bg-white">
              <h1 className="ml-2 mt-2">Updated at dd-mm-yy</h1>
              <div className="p-2">
                <TableCurrent />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h1 className="mb-2 text-center lg:text-left">HISTORY-3DAYS</h1>
            <div
              className="p-4 rounded-lg shadow-sm"
              style={{ background: "#eef7fa" }}
            >
              <div className="p-2">
                <TableHistory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessGrowth;
