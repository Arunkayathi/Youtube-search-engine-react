import React, { Component } from "react";
import "./SearchBar.css";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  searchVideos = event => {
    event.preventDefault();
    console.log(this.state.searchText);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.searchVideos}>
          <div className="field">
            <div className="ui big icon labeled input">
              <div className="ui label youtube-label">YOUTUBE</div>
              <input
                type="text"
                placeholder="Search..."
                value={this.state.searchText}
                onChange={event =>
                  this.setState({ searchText: event.target.value })
                }
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
