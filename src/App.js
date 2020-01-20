import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import youtube, { baseParams } from "./api/youtube.js";
import VideoList from "./components/VideoList/VideoList";
import VideoDetail from "./components/VideoDetail/VideoDetail";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  onSearchTextSubmit = async term => {
    const {
      data: { items: videos }
    } = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: term
      }
    });

    this.setState({ videos, selectedVideo: videos[2] });
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui custom-margin">
        <SearchBar onFormSubmit={this.onSearchTextSubmit} />
        {this.state.videos.length > 0 && (
          <React.Fragment>
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail selectedVideo={this.state.selectedVideo} />
                </div>

                <div className="five wide column">
                  <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;
