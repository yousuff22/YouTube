import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full">
      <div className="px-10 flex flex-col lg:flex-row w-full gap-4">
        <div className="w-full lg:max-w-[1000px] aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full h-[500px] overflow-y-scroll">
          <LiveChat />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default WatchPage;
