import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import youtube, { baseParams } from "./api/youtube.js";

class App extends Component {
  onSearchTextSubmit = async term => {
    console.log(term);
    const { data } = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: term
      }
    });
    console.log(data);
  };
  render() {
    return (
      <div className="ui container margin-top">
        <SearchBar onFormSubmit={this.onSearchTextSubmit} />
      </div>
    );
  }
}

export default App;
