import React from "react";
import GameCardContainer from "./GameCardContainer";
export default function Indie() {
    // Hooks
    // CONNECT EXPRESS SERVER AND GET LIST OF COLLEGE
    
    return (
        <div className="Home">
        <h1> Trending in Indie </h1>
        	<h2>Out of the 10 games rate from from 1-5 stars</h2>
      	<GameCardContainer
        gameType="indie" />

      
    </div>
  );
}