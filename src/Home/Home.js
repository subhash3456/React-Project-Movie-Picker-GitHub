import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import api from "../api/moviesapi";
import axios from "axios";

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const retrieveMovies = async () => {
      try {
        const response = await api.get("/allMovies");
        setMovieList(response.data);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    retrieveMovies();
  }, []);

  return (
    <>
      <h1>Movies List</h1>
      <MovieList list={movieList} />
    </>
  );
};

export default Home;

//retrieve movies
// const retrieveMovies = async () => {
//   const response = await api.get("/allMovies");
//   return response;
// };

// useEffect(() => {
//   const getAllMovies = async () => {
//     const allMovies = await retrieveMovies();

//     if (allMovies) setMovieList(allMovies.data);
//   };

//   getAllMovies();
// }, []);

{
  /* <ul>
        {movieList.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul> */
}
// {
//   name: "",
//   rating: "",
//   avalaibleOn: "",
//   suggestedBy: "",
//   genre: "",
//   trailerlink: "",
// },

// const [movieList, setMovieList] = useState([
//   { name: "deadpool", rating: 9, id: 1 },
//   { name: "wolverine ", rating: 9.2, id: 2 },
//   { name: "deadpool & wolverine ", rating: 9.8, id: 3 },
// ]);

// const handleClick = (name, e) => {
//   alert("fuck you mf " + name + e.target.value + " " + e);
//   console.log(e);
// };

// useEffect(() => {
//   console.log("1234");
// });

// const handleDelete = (id) => {
//   setMovieList(movieList.filter((x) => x.id !== id));
// };
// useEffect(() => {
//   axios.get();
// });
