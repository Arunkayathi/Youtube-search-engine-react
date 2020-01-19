import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import youtube, { baseParams } from "./api/youtube.js";
import VideoList from "./components/VideoList/VideoList";

class App extends Component {
  state = {
    videos: []
  };
  onSearchTextSubmit = async term => {
    console.log(term);
    const {
      data: { items: videos }
    } = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: term
      }
    });
    this.setState({ videos });
  };
  render() {
    return (
      <div className="ui container margin-top">
        <SearchBar onFormSubmit={this.onSearchTextSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
