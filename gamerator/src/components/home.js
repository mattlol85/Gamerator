import React from "react";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import "../Styles/home.css"; 
export default function Home() {
    // Hooks
    // CONNECT EXPRESS SERVER AND GET LIST OF COLLEGE
    
    return (
        <div className="Home">
            <h1 id="homeTitle"> Home</h1>
      <GameCard />

      
    </div>
  );
}