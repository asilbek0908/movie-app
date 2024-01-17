import React, { Component } from "react";
import Movies from "../components/Movies";
import Searchbar from "../components/SearchBar";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=648feaea&s=spider`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  searchMovies = (text, type = "all") => {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=648feaea&s=${text}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    return (
      <main className="container">
        <Searchbar searchMovies={this.searchMovies} />
        <Movies movies={this.state.movies} />
      </main>
    );
  }
}

export default Main;
