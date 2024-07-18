import { Link } from "react-router-dom";
import "../MovieList/MovieList.css";

const MovieList = ({ list }) => {
  return (
    <>
      <h1>MoviesList</h1>
      {/* <ul>
        {list.map((x) => (
          <h1>{x.name}</h1>
        ))}
      </ul> */}
      <div className="moviesListclass">
        {list.map((x) => (
          <div key={x.id} className="movie">
            <img src="" alt={x.name} className="movieImg" />
            <div className="movieDetails">
              <h4> Name :{x.name}</h4>
              <h4>Rating : {x.rating}</h4>
              <h4> AvalaibleOn: {x.avalaibleOn}</h4>
              <h4>{x.suggestedBy}</h4>
              <h4>{x.genre}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;

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
