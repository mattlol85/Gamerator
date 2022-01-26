import React from "react";
import BigGameCard from "./BigGameCard";
import GameCard from "./GameCard";
import './styles/Home.css'

export default function Home() {

    // Hooks
    
    return (
        <div className="homePage">
            <h1 id="homeTitle"> Home</h1>
            <GameCard />
        </div>
    )
}

