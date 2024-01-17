import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    const { movies = [] } = this.props;

    return (
      <div className="movies">
        {movies.length ? (
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          <main className="bl_page404">
            <h1 className="heading">Error 404. The data do not found</h1>
            <p className="paragraph">
              Sorry! The movie you are looking for cannot be found. Perhaps the
              movie you requested was moved or deleted or do not exist. It is
              also possible that you made a small typo when entering the name.
              Go to the main page.
            </p>
            <div className="bl_page404__wrapper">
              <img
                src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true"
                alt="cloud_warmcasino.png"
              />
              <div className="bl_page404__el1"></div>
              <div className="bl_page404__el2"></div>
              <div className="bl_page404__el3"></div>
              <a className="bl_page404__link" href="index.html">
                go home
              </a>
            </div>
          </main>
        )}
      </div>
    );
  }
}

export default Movies;
