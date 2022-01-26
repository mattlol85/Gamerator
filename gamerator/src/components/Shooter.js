import React from "react";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
 
export default function Shooter() {
    // Hooks
    // CONNECT EXPRESS SERVER AND GET LIST OF COLLEGE
    
    return (
        <div className="Home">
        <h1> Trending in Shooter </h1>
            <h2>Out of the 10 games rate from from 1-5 stars</h2>
        <GameCard 
        gameType="shooter"/>
    </div>
  );
}