import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center mt-10 items-center">
        <h1 className="text-lg font-bold">Resources Page</h1>

        <Link to={"/"}>
          <h1 className="text-blue-500">Click here to go Home</h1>{" "}
        </Link>
      </div>
    </>
  );
}

export default Resources;
