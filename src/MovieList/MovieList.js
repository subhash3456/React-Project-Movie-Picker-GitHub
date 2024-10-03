import { Link } from "react-router-dom";
import "../MovieList/MovieList.css";
import { useState } from "react";
import { useEffect } from "react";
import api from "../api/moviesapi";

const MovieList = ({ list }) => {
  // const [view, setView] = useState("View");

  // const updatedMovies = { ...list, view: "Not Viewed" };
  const [movies, setMovies] = useState(list);

  useEffect(() => {
    if (list.length > 0) {
      setMovies(list);
    }
  }, [list]);

  useEffect(() => {
    const updateMovies = list.map((movie) => ({
      ...movie,
      view: "Not Viewed",
    }));

    setMovies(updateMovies);
  }, [list]);

  // const handleDelete = async (x) => {
  //   try {
  //     const response = await api.post("/deleteMovie", x);
  //     // setMovieList(response.data);
  //   } catch (error) {
  //     console.error("Error :", error);
  //   }
  // };

  const handleDelete = async (x) => {
    try {
      console.log(x);
      await api.delete("/deleteMovie", {
        headers: {
          "Content-Type": "application/json",
        },
        data: x,
      });

      console.log(x.id);

      const updateMovieList = movies.filter((item) => item.id !== x.id);
      setMovies(updateMovieList);
    } catch (error) {
      console.error("Error :", error);
    }
  };

  const handleView = (id) => {
    const updatedViewItems = movies.map((item) => {
      if (item.id === id) {
        return { ...item, view: "Viewed" };
      }
      return item;
    });

    setMovies(updatedViewItems);
  };

  const handleViewed = (id) => {
    const updatedViewedItems = movies.map((item) => {
      if (item.id === id) {
        return { ...item, view: "Not Viewed" };
      }
      return item;
    });

    setMovies(updatedViewedItems);
  };

  // const handleDelete = (item) => {

  //   const updatedItems = movies.filter((x) => x !== item);

  //   setMovies(updatedItems);
  // };

  return (
    <>
      <div>
        <ul>
          <div className="moviesListclass">
            {movies.map((item, index) => (
              <li key={index}>
                <div className="movieClass">
                  <h2> Movie Name: {item.name}</h2>
                  <h2> Rating : {item.rating}</h2>
                  <h2>Suggested By: {item.suggestedBy}</h2>
                  <h2> Availaible On: {item.availaibleOn}</h2>
                  <h2> Genre : {item.genre}</h2>
                  <button onClick={() => handleDelete(item)}>Delete</button>
                  <button
                    onClick={() => handleView(item.id)}
                    onDoubleClick={() => handleViewed(item.id)}
                  >
                    {item.view}
                  </button>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default MovieList;

// {movies.map((x) => (
//   <div key={x.id} className="movie">
//     <img src="" alt={x.name} className="movieImg" />
//     <div className="movieDetails">
//       <h4> Name :{x.name}</h4>
//       <h4>Rating : {x.rating}</h4>
//       <h4> AvalaibleOn: {x.avalaibleOn}</h4>
//       <h4>SuggestedBy : {x.suggestedBy}</h4>
//       <h4>Genre : {x.genre}</h4>
//       {/* <button onClick={handleView}>{view}</button> */}
//       {/* <button onClick={() => handleDelete(x)}>Delete</button> */}
//     </div>
//   </div>
// ))}

{
  /* <div className="movieList">
        <h2>{title}</h2>
        {movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <Link to="/movieDetails">
              <h3>{movie.name}</h3>
            </Link>

            <h4>{movie.rating}</h4>
            <h5>
              <button onClick={() => handleDelete(movie.id)}>delete</button>
            </h5>
          </div>
        ))}
      </div> */
}

{
  /* <ul>
        {list.map((x) => (
          <h1>{x.name}</h1>
        ))}
      </ul> */
}
