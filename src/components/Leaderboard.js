import React, { useState,useEffect } from 'react';
import './styles/Leaderboards.css';
export default function Leaderboard() {
    const [topGames, setTopGames] = useState([]);

    useEffect( () => {
        fetch(`http://${process.env.REACT_APP_HOSTNAME}/leaderboard`)
       .then(res => res.json())
       .then((result) => {
           let arr = {}
           for(let genre in result)
           {
            let temp = result[genre]
            arr[genre] = temp.map((element)=><li><em style={{fontSize:'1.5em',fontWeight:'bold'}}>{element.gameName}</em><br></br><br></br>
           Metacritic rating: {element.metaRating!=='null'?element.metaRating:'N/A'}<br></br>
           RAWG rating: {element.userRating}<br></br>
           <h3>Our Rating: {element.ourScore} </h3>out of {element.numVotes} user review(s)
           <br></br><br></br>
           ---------------------------------
           <br></br><br></br></li>)
           }
           setTopGames(arr)})
     }, [])

    return (
        <div className="Leaderboard">
        <h1 className="leaderHeader">Top Rated Games</h1>
        <div className="leaderboardcolumns">
        <ol>
        <h1>Action</h1>
        {topGames.action}
        </ol>
        <ol >
        <h1>Indie</h1>
        {topGames.indie}
        </ol>
        <ol>
        <h1>Adventure</h1>
        {topGames.adventure}
        </ol>
        <ol >
        <h1>RPG</h1>
        {topGames.rpg}
        </ol>
        <ol >
        <h1>Shooter</h1>
        {topGames.shooter}
        </ol>
        </div>
    </div>
  );
}