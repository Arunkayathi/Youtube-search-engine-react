import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  console.log(video);
  return (
    <div className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.high.url}
      />
      <div className="content">
        <a className="header">{video.snippet.title}</a>
      </div>
    </div>
  );
};

export default VideoItem;
