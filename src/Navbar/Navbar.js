import { Link } from "react-router-dom";
import React from "react";
import "../Navbar/Navbar.css";
import NavBarImg from "../Images/navbar image.jpg";

const Navbar = () => {
  return (
    <div className="navbar1">
      <nav className="navbar">
        <div className="Logo">
          <Link to="/">
            <img src={NavBarImg} alt="navBarImg " className="navbarImg" />
          </Link>
        </div>

        <div className="Navbarlinks">
          <Link to="/" className="NavBarLink">
            <button className="Home">Home</button>
          </Link>
          <Link to="/addMovie" className="NavBarLink">
            <button className="AddMovie">Add Movie</button>
          </Link>
          <Link to="/filterform" className="NavBarLink">
            <button className="Filter">Filter</button>
          </Link>
          <Link to="/randomMovie" className="NavBarLink">
            <button className="RandomMovie">Random Movie</button>
          </Link>
        </div>
        <div className="title">
          <h2>Movie Picker</h2>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
