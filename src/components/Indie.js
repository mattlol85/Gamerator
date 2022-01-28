import React from "react";
import GameCardContainer from "./GameCardContainer";
import "./styles/GameCardContainer.css";
export default function Indie() {
    // Hooks
    // CONNECT EXPRESS SERVER AND GET LIST OF COLLEGE
    
    return (
        <div className="Home">
        <h1 className="barHeader"> Trending in Indie </h1>
        	
      	<GameCardContainer
        gameType="indie" />

      
    </div>
  );
}