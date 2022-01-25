import React from "react";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import "../Styles/home.css"; 

 
export default function home() {
  return (
    <div className="homecontainer">
      
      <h1>Popular Trends</h1>
      <h3>based on voting count!</h3>

      <GameCard />

      
    </div>
  );
}