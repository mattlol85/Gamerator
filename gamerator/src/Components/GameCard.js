import React, { useState,useEffect } from 'react';
import "../Styles/GameCard.css"; 



export default function GameCard() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/action")
    .then(res => res.json())
    .then(
      (result) => {
        setGames(result);

      },
      )
  }, [])

  return (
    <div className="CardDisplay">

    {games.map((games)=>{
      return <div key={games.id} className="gameCardDiv">
        <h2 className="header">{games.gameName} </h2>
        <img src={games.backgroundImg} className="imgCard"/> <br/>
        <div className="cardPlacement">
        <button className="cardButton"> Vote </button>
        </div>

      </div>
    })

  } 

  </div>
  );
}

                    