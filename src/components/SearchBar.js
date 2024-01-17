import { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleText = (e) => {
    if (e.key === "Enter")
      this.props.searchMovies(this.state.search, this.state.type);
  };

  handleSearchButtonClick = () => {
    this.props.searchMovies(this.state.search, this.state.type);
  };

  handleCategories = (e) => {
    this.setState(
      {
        type: e.target.dataset.type,
      },
      () => {
        this.props.searchMovies(this.state.type);
      }
    );
  };

  render() {
    const { search } = this.state;
    return (
      <div className="search">
        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            name="search"
            value={search}
            placeholder="Type to Search"
            autoComplete="off"
            onChange={(e) => {
              this.setState({
                search: e.target.value,
              });
            }}
            onKeyUp={this.handleText}
          />
          <a
            className="search-btn"
            href="#!"
            onClick={this.handleSearchButtonClick}
          >
            <i className="fas fa-search"></i>
          </a>
        </div>

        <div className="segmented-picker">
          <input
            id="item-1"
            type="radio"
            name="picker"
            data-type="movie"
            onChange={this.handleCategories}
            checked={this.state.type === "movie"}
          />
          <label for="item-1">
            <span>Movies</span>
          </label>

          <input
            id="item-2"
            type="radio"
            name="picker"
            data-type="all"
            onChange={this.handleCategories}
            checked={this.state.type === "all"}
          />
          <label for="item-2">
            <span>All</span>
          </label>

          <input
            id="item-3"
            type="radio"
            name="picker"
            data-type="series"
            onChange={this.handleCategories}
            checked={this.state.type === "series"}
          />
          <label for="item-3">
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
