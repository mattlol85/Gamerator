import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="Logo">GameRater</div>

      <Link className="leaderboard" to="/Leaderboard">
        Leaderboard
      </Link >
      
      <Link className="home" to="/home">
        GameRater
      </Link >
     
      <Link className="action" to="/Action">
        Action
      </Link >
     
      <Link className="adventure" to="/Adventure">
        Adventure
      </Link >
      
      <Link className="indie" to="/Indie">
        Indie
      </Link >

      <Link className="shooter" to="/Shooter">
        Shooter
      </Link >
     
      <Link className="rpg" to="/Rpg">
        RPG
      </Link >
      
      
      
    
    </nav>
  );
}
