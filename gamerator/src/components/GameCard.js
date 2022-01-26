import React, { useState,useEffect } from 'react';
import "./styles/GameCard.css"; 
import BigGameCard from './BigGameCard';


export default function GameCard() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/action")
    .then(res => res.json())
    .then(
      (result) => {
        setGames(result);
        console.log(result)

      },
      )
  }, [])

  return (
    <div className="CardDisplay">

    {games.map((games)=>{
      return <div key={games.id} className="gameCardDiv">
       <img src={games.backgroundImg} className="imgCard"/> <br/>
        <h2 className="header">{games.gameName} </h2>
        <div className="cardPlacement">
        <BigGameCard/>
        </div>

      </div>
    })

  } 

  </div>
  );
}

                    