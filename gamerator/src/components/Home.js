import React from "react";
import GameCardContainer from "./GameCardContainer";
import './styles/Home.css'

export default function Home() {

    // Hooks
    
    return (
        <div className="homePage">
            <h1 id="homeTitle"> Home</h1>
            <h2>List of Popular Games</h2>
            <GameCardContainer gameType="action"/>
        </div>
    )
}

