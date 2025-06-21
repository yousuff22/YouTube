import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  // make an api call for each key press
  // but if the diff between 2 key press is <200ms then decline the api call
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    // called when compo unmount
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // explaintion debouncing
  /**
   *
   * key - i
   * re render the compo
   * useEffect(); called
   * start timer => make api call after 200ms
   *
   * key - ip
   * - destroy the component(useEffect return method)
   * - re-render the compo
   * - useEffect(); called
   * - start timer => make api call after 200ms
   */

  const getSearchSuggestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestion(json[1]);
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (err) {
      console.error("Failed to fetch suggestions", err);
    }
  };

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
        <div>
          <input
            className="px-5 mt-3.5 p-2 w-130 rounded-l-full border border-gray-400"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          ></input>
          <button className=" cursor-pointer border border-gray-400 p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-2 w-128 shadow rounded-lg ml-2 border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="p-1 m-1 px-5 hover:bg-gray-100 rounded-sm"
                >
                  🔍︎ {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
