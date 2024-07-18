import { Link } from "react-router-dom";
import React from "react";
import "../Navbar/Navbar.css";
import NavBarImg from "../Images/navbar image.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={NavBarImg} alt="navBarImg " className="navbarImg" />
      <div className="Navbarlinks">
        <Link to="/" className="NavBarLink">
          <button>Home</button>
        </Link>
        <Link to="/addMovie" className="NavBarLink">
          <button>Add Movie</button>
        </Link>
        <Link to="/filterform" className="NavBarLink">
          <button>Filter</button>
        </Link>
        <Link to="/randomMovie" className="NavBarLink">
          <button>Random Movie</button>
        </Link>
      </div>
      <div className="title">
        <h2>Movie Picker</h2>
      </div>
    </nav>
  );
};

export default Navbar;
