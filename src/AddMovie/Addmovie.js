import { useState } from "react";
import "../AddMovie/Addmovie.css";
import api from "../api/moviesapi";
import axios from "axios";

const AddMovie = () => {
  const [input, setInput] = useState({
    name: "",
    rating: "",
    avalaibleOn: "",
    suggestedBy: "",
    genre: "",
    trailerlink: "",
    viewed: "Not Viewed",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const result = await api.post("/addMovie", input);
      console.log(result.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <div className="AddMovie">
        <form action="" className="movieForm" onSubmit={handleSubmit}>
          <label className="labels">Movie Name</label>
          <input
            type="text"
            name="name"
            value={input.name || ""}
            onChange={handleChange}
            className="inputs"
          />
          <label className="labels">Rating</label>
          <input
            type="text"
            name="rating"
            value={input.rating || ""}
            onChange={handleChange}
            className="inputs"
          />
          <label className="labels">AvalaibleOn</label>
          <input
            type="text"
            name="avalaibleOn"
            value={input.avalaibleOn || ""}
            onChange={handleChange}
            className="inputs"
          />
          <label className="labels">SuggestedBy</label>
          <input
            type="text"
            name="suggestedBy"
            value={input.suggestedBy || ""}
            onChange={handleChange}
            className="inputs"
          />
          <label className="labels">Genre</label>
          <input
            type="text"
            name="genre"
            value={input.genre || ""}
            onChange={handleChange}
            className="inputs"
          />
          <label className="labels">TrailerLink</label>
          <input
            type="text"
            name="trailerlink"
            value={input.trailerlink || ""}
            onChange={handleChange}
            className="inputs"
          />
          <input className="inputs" type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddMovie;

// const handleSubmit = async () => {
//   const response = await api.post("/addMovie", input);
//   console.log(response.data);
//   alert(response.data);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const movie = { name, rating };
//   console.log(movie);
// };

{
  /* <h2>Add the Movie</h2>
        <form onSubmit={handleSubmit}>
          <label>Movie Name : </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <label>Rating : </label>
          <input
            type="text"
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          ></input>
          <br />
          <button>Add movie</button>
        </form> */
}
