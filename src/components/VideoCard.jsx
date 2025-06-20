import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  if (!info) return;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-70 shadow-lg cursor-pointer">
      <img className="rounded-lg" alt="video" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
