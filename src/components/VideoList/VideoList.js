import React from "react";
import VideoItem from "./VideoItem/VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const items = videos.map((video, index) => {
    return (
      <VideoItem
        video={video}
        key={index}
        onEmitSelectedVideo={video => onVideoSelect(video)}
      ></VideoItem>
    );
  });
  return (
    <div className="ui card">
      <div className="ui relaxed divided list">{items.length > 0 && items}</div>
    </div>
  );
};

export default VideoList;
