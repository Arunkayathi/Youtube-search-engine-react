import React from "react";
import VideoItem from "./VideoItem/VideoItem";

const VideoList = ({ videos }) => {
  const items = videos.map((video, index) => {
    return <VideoItem video={video} key={index}></VideoItem>;
  });
  return (
    <div className="ui relaxed divided list">{items.length > 0 && items}</div>
  );
};

export default VideoList;
