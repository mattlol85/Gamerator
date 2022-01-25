import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="Logo"> Welcome to GameRater</div>
      <Link className="home" to="/">
        Home
      </Link >
      <Link className="LoginSignUp" to="/login">
        Login/SignUp
      </Link>
    </nav>
  );
}
