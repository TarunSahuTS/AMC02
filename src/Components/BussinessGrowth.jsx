import React from "react";
import Table from "./Table";
import TableHistory from "./TableHistory";
import TableCurrent from "./TableCurrent";

function BussinessGrowth() {
  return (
    <div className="flex justify-center">
      <div
        style={{ width: "1758px", height: "521px" }}
        className="flex flex-col justify-center"
      >
        <h1 className="text-2xl font-bold mt-10  mb-3 text-cyan-900 ">
          Bussiness Growth
        </h1>

        <div className="mx-20  flex justify-between space-x-5">
          <div className=" ">
            <h1 className="mb-2">CURRENT</h1>
            <div
              className=" border border-blue-100"
              style={{ width: "798px", height: "319px" }}
            >
              <h1 className="ml-2 mt-2">Updated at dd-mm-yy</h1>
              <div className="p-2">
                <TableCurrent />
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="mb-2">HISTORY-3DAYS</h1>
            <div
              style={{ background: "#eef7fa", width: "798px", height: "319px" }}
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

export default BussinessGrowth;
