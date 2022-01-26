import React, { useState,useEffect } from 'react';
 
export default function Leaderboard() {
    const [topGames, setTopGames] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:8080/leaderboard`)
       .then(res => res.json())
       .then((result) => {
           let arr = {}
           for(let genre in result)
           {
            let temp = result[genre]
            arr[genre] = temp.map((element)=><li><em style={{fontSize:'1.2em',fontWeight:'bold'}}>{element.gameName}</em><br></br>
           Metacritic rating: {element.metaRating}<br></br>
           RAWG rating: {element.userRating}<br></br>
           <strong>Our rating: {element.ourScore} out of {element.numVotes} user votes</strong><br></br><br></br><br></br></li>)
           }
           setTopGames(arr)})
     }, [])

    return (
        <div className="Leaderboard">
        <h1>Top Rated Games</h1>
        <div className="leaderboardcolumns" style={{display:'flex',justifyContent:'space-evenly'}}>
        <ol style={{listStylePosition: 'inside'}}>
        <h2>Action</h2>
        {topGames.action}
        </ol>
        <ol style={{listStylePosition: 'inside'}}>
        <h2>Indie</h2>
        {topGames.indie}
        </ol>
        <ol style={{listStylePosition: 'inside'}}>
        <h2>Adventure</h2>
        {topGames.adventure}
        </ol>
        <ol style={{listStylePosition: 'inside'}}>
        <h2>RPG</h2>
        {topGames.rpg}
        </ol>
        <ol style={{listStylePosition: 'inside'}}>
        <h2>Shooter</h2>
        {topGames.shooter}
        </ol>
        </div>
    </div>
  );
}