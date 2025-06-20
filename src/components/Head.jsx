import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 shadow">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-14 p-4 cursor-pointer"
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
          alt="menu"
        ></img>
        <img
          className="h-14"
          alt="youtube algo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo-2017.png"
        ></img>
      </div>
      <div className="col-span-10 px-40">
        <input
          className="mt-3.5 p-2 w-130 rounded-l-full border border-gray-400"
          type="text"
          placeholder="Search"
        ></input>
        <button className=" border border-gray-400 p-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div>
        <img
          className="h-10"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"
        ></img>
      </div>
    </div>
  );
};

export default Head;
