import React, { useEffect } from "react";
import api from "../api/moviesapi";
import "../FilterMovie/Filter.css";
import { useState } from "react";
import MovieList from "../MovieList/MovieList";
// import FilteredMovie from "./FilteredMovie";

const Filter = () => {
  const [filter, setFilter] = useState({
    name: "",
    rating: "",
    avalaibleOn: "",
    suggestedBy: "",
    genre: "",
  });

  const [filteredMovies, setFilteredMovies] = useState([
    // {
    //   name: "",
    //   rating: "",
    //   avalaibleOn: "",
    //   suggestedBy: "",
    //   genre: "",
    // },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSubmit = async () => {
    const response = await api.get("/filterMovie", filter);

    console.log("successfully retrieved the filtered movie");

    console.log(response);
    console.log(response.data);

    setFilteredMovies(response.data);
  };

  // useEffect(() => {
  //   setFilteredMovies(response.data);
  // }, []);

  return (
    <>
      <div>
        <form action="" className="filterform" onSubmit={handleSubmit}>
          <label name="name">
            Movie Name :
            <input
              type="text"
              name="name"
              value={filter.name}
              onChange={handleChange}
            />
          </label>
          <label name="rating">
            Rating:
            <input
              type="text"
              name="rating"
              value={filter.rating}
              onChange={handleChange}
            />
          </label>
          <label name="avalaibleOn">
            AvalaibleOn :
            <input
              type="text"
              name="avalaibleOn"
              value={filter.avalaibleOn}
              onChange={handleChange}
            />
          </label>
          <label name="suggestedBy">
            SuggestedBy :
            <input
              type="text"
              name="suggestedBy"
              value={filter.suggestedBy}
              onChange={handleChange}
            />
          </label>
          <label name="genre">
            Genre :
            <input
              type="text"
              name="genre"
              value={filter.genre}
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>

        <MovieList list={filteredMovies} />
      </div>
    </>
  );
};

export default Filter;

//   useEffect(() => {
//     const getAllMovies = async () => {
//       const allMovies = await retrieveMovies();

//       if (allMovies) setMovieList(allMovies.data);
//     };

//     getAllMovies();
//   }, []);

//   useEffect(() => {
//     if (filter) {
//       alert("filtered the movie based on category");
//     }
//   }, []);

{
  /* <FilteredMovie filterMovie={filter} /> */
}
{
  /* {filteredMovies.length > 0 && (
          <div className="filtered-movies">
            <h2>Filtered Movies:</h2>
            <ul>
              {filteredMovies.map((movie, index) => (
                <li key={index}>
                  <h3>Name: {movie.name}</h3>
                  <p>Rating: {movie.rating}</p>
                  <p>Available On: {movie.avalaibleOn}</p>
                  <p>Suggested By: {movie.suggestedBy}</p>
                  <p>Genre: {movie.genre}</p>
                </li>
              ))}
            </ul>
          </div>
        )} */
}

// useEffect(() => {
//   if (filteredMovies.length > 0) {
//     alert("Filtered the movie based on category");
//   }
// }, [filteredMovies]);
