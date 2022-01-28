import React from "react";
import { Link } from "react-router-dom";
import GameCardContainer from "./GameCardContainer";
import "./styles/GameCardContainer.css";
export default function Adventure() {
    // Hooks
    // CONNECT EXPRESS SERVER AND GET LIST OF COLLEGE

    return (
        <div className="Home">
            <h1 className="advHeader"> Trending in Adventure </h1>
           
            {/* <GameCard gameType="adventure" /> */}
            <GameCardContainer gameType="adventure"/>
        </div>
    );
}