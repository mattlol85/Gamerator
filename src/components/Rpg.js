import React from "react";
import GameCardContainer from "./GameCardContainer";
import "./styles/GameCardContainer.css";
export default function RPG() {
    // Hooks
    // CONNECT EXPRESS SERVER AND GET LIST OF COLLEGE
    
    return (
        <div className="Home">
        <h1 className="rpgHeader"> Trending in RPG </h1>
            
        <GameCardContainer 
        gameType="rpg"/>

      
    </div>
  );
}