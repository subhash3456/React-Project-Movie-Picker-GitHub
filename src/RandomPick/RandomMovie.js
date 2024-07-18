import React from "react";
import api from "../api/moviesapi";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";

const RandomMovie = () => {
  const [movieList, setMovieList] = useState([]);

  //retrieve movies
  const retrieveMovies = () => {
    const response = api.get("/randomMovie");
    return response;
  };

  useEffect(() => {
    const getRandomMovie = () => {
      const allMovies = retrieveMovies();

      if (allMovies) setMovieList(allMovies.data || []);
    };

    getRandomMovie();
  }, []);
  return (
    <div>
      <h1>Random picked Movie</h1>
      <MovieList list={movieList} />
    </div>
  );
};

export default RandomMovie;
