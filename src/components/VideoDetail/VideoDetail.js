import React from "react";

const VideoDetail = ({
  selectedVideo: {
    snippet,
    id: { videoId }
  }
}) => {
  const publishedYear = new Date(snippet.publishedAt).getFullYear();
  const url = `https://www.youtube.com/embed/${videoId}`;
  if (!snippet) {
    return <div> Loading.....</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={url}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{snippet.title}</h4>
        <p>{snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
