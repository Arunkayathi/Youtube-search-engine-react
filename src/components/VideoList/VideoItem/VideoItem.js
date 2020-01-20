import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onEmitSelectedVideo }) => {
  const onVideoClicked = () => {
    onEmitSelectedVideo(video);
  };
  return (
    <div className="video-item item" onClick={onVideoClicked}>
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
