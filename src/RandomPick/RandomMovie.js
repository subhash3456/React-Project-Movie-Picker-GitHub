import React from "react";
import api from "../api/moviesapi";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";

const RandomMovie = () => {
  const [randomMov, setRandomMov] = useState([]);

  //retrieve movies
  // const retrieveMovies = () => {
  //   const response = api.get("/randomMovie");
  //   return response;
  // };

  // useEffect(() => {
  //   const getRandomMovie = () => {
  //     const randomMovies = retrieveMovies();

  //     if (randomMovies) setMovieList(randomMovies.data || []);
  //   };

  //   getRandomMovie();
  // }, []);
  // useEffect(() => {
  //   fetch("http://localhost:3500/randomMovie")
  //     .then((response) => response.json())
  //     .then((data) => setRandomMov(data));
  // }, []);

  useEffect(() => {
    const retrieveRandomMovie = async () => {
      try {
        const response = await api.get("/randomMovie");
        setRandomMov(response.data);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    retrieveRandomMovie();
  }, []);

  const firstRecord = randomMov[0];

  return (
    <div>
      <h1>Randomly picked Movie</h1>

      {firstRecord && (
        <div className="randomlyPickedMovie">
          <h2> Movie Name : {firstRecord.name} </h2>
          <h2> Rating : {firstRecord.rating} </h2>
          <h2> Suggested By :{firstRecord.suggestedBy}</h2>
          <h2> Avalaible On : {firstRecord.avalaibleOn}</h2>
          <h2> Genre : {firstRecord.genre}</h2>
        </div>
      )}
    </div>
  );
};

export default RandomMovie;
