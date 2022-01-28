import React from "react";
import GameCardContainer from "./GameCardContainer";
import "./styles/GameCardContainer.css";
export default function Shooter() {
    // Hooks
    // CONNECT EXPRESS SERVER AND GET LIST OF COLLEGE
    
    return (
        <div className="Home">
        <h1 className="shooterHeader"> Trending in Shooter </h1>
           
        <GameCardContainer gameType="shooter"/>
    </div>
  );
}