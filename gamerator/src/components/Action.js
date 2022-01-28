import React from "react";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";



export default function Action() {
    // Hooks
    // CONNECT EXPRESS SERVER AND GET LIST OF COLLEGE
    
    return (
        <div className="Home">
        <h1> Trending in Action </h1>


      <GameCardContainer gameType="action"/>
    </div>
  );
}

