import React from "react";
import GameCardContainer from "./GameCardContainer";
 
export default function RPG() {
    // Hooks
    // CONNECT EXPRESS SERVER AND GET LIST OF COLLEGE
    
    return (
        <div className="Home">
        <h1> Trending in RPG </h1>
            
        <GameCardContainer 
        gameType="rpg"/>

      
    </div>
  );
}