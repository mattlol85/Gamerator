import React, { useState, useEffect } from 'react';
import "../Styles/GameCard.css"; 



export default function GameCard(props) {


  const [games, setGames] = useState([]);
 
  useEffect(  () => {
     fetch(`http://localhost:8080/${props.gameType}/limit=10`)
    .then(res => res.json())
    .then(
      (result) => {
        setGames(result);
        console.log(result)

      },
      )
  }, [])

  //displays the imformation that is fetched
  const display = () =>{
    return games.map((games)=>{
      return <div key={games.id} className="gameCardDiv">
       <img src={games.backgroundImg} className="imgCard"/> 
        <h2 className="header">{games.gameName} </h2>
        <div className="cardPlacement">
        </div>
        <h3 className="rating"> {games.esrbRating}</h3>
        <h3 className="genre"> {games.genres}</h3>
        <h3 className="rating"> {games.metaRating}</h3>
        <h3 className="rating"> {games.userRating}</h3>
      </div>
    })
  }

  return (
    
      <div className="data">
      {display()}
      </div>
  

  );
}

                    