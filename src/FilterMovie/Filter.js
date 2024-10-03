import React, { useEffect } from "react";
import api from "../api/moviesapi";
import "../FilterMovie/Filter.css";
import { useState } from "react";
import MovieList from "../MovieList/MovieList";
// import FilteredMovie from "./FilteredMovie";
import axios from "axios";

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFilteredMovies(null);

    try {
      const response = await api.post("/filterMovie", filter);
      setFilteredMovies(response.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }

    // console.log(response.data);

    // setFilteredMovies(response.data);
  };

  const handleClearFilter = () => {
    setFilter({
      name: "",
      rating: "",
      avalaibleOn: "",
      suggestedBy: "",
      genre: "",
    });
    setFilteredMovies([]);
  };
  // useEffect(() => {
  //   setFilteredMovies(response.data);
  // }, []);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label name="name" className="filterlabels">
            Movie Name :
          </label>
          <input
            type="text"
            name="name"
            value={filter.name}
            onChange={handleChange}
            className="filterinputs"
          />

          <label name="rating" className="filterlabels">
            Rating:
          </label>
          <input
            type="text"
            name="rating"
            value={filter.rating}
            onChange={handleChange}
            className="filterinputs"
          />

          <label name="avalaibleOn" className="filterlabels">
            AvalaibleOn :
          </label>
          <input
            type="text"
            name="avalaibleOn"
            value={filter.avalaibleOn}
            onChange={handleChange}
            className="filterinputs"
          />

          <label name="suggestedBy" className="filterlabels">
            SuggestedBy :{" "}
          </label>
          <input
            type="text"
            name="suggestedBy"
            value={filter.suggestedBy}
            onChange={handleChange}
            className="filterinputs"
          />

          <label name="genre" className="filterlabels">
            Genre :{" "}
          </label>
          <input
            type="text"
            name="genre"
            value={filter.genre}
            onChange={handleChange}
            className="filterinputs"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <button onClick={handleClearFilter}>Clear Filter</button>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {filteredMovies && (
          <div>
            <MovieList list={filteredMovies} />
          </div>
        )}
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
