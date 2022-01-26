import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import GameCard from "./GameCard"

export default function NavBar() {

  return (
    <nav className="navbar">
      <div className="Logo">GameRater</div>
      
      <Link className="action" to="/Action">
        Action
      </Link >

      <Link className="adventure" to="/Adventure">
        Adventure
      </Link >

      <Link className="indie" to="/Indie">
        Indie
      </Link >

      <Link className="shooter" to="Shooter">
        Shooter
      </Link >

      <Link className="rpg" to="Rpg">
        RPG
      </Link >

      <Link className="home" to="/home">
        Home
      </Link >
      
    
    </nav>
  );
}
