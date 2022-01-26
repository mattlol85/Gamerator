import React, { useState,useEffect } from 'react';
import "./styles/GameCard.css"; 
import BigGameCard from './BigGameCard';


export default function GameCard(props) {

  const [games, setGames] = useState([]);
 
  useEffect(  () => {
     fetch(`http://localhost:8080/${props.gameType}/limit=10`)
    .then(res => res.json())
    .then(
      (result) => {
        setGames(result);
      },
      )
  }, [])

  async function rateGame(rating,id){
    fetch(`http://localhost:8080/${id}/${rating}`,{method:'PUT'})
  }

  //displays the imformation that is fetched
  const display = () =>{
    return games.map((games)=>{
      return <div key={games.id} className="gameCardDiv">
       <img src={games.backgroundImg} className="imgCard"/> 
        <h2 className="header">{games.gameName} </h2>
        <div className="cardPlacement">
        </div>
        <h3 className="rating"> {games.esrbRating} / {games.genres}</h3>
        <h3 className="genre"> </h3> {/*moved genre to make space in the card for the buttons*/}
        <h4 className="rating"> Metacritic rating: {games.metaRating} / RAWG rating: {games.userRating}</h4>
        <button onClick={()=>rateGame(1,games.id)}>1</button>
        <button onClick={()=>rateGame(2,games.id)}>2</button>
        <button onClick={()=>rateGame(3,games.id)}>3</button>
        <button onClick={()=>rateGame(4,games.id)}>4</button>
        <button onClick={()=>rateGame(5,games.id)}>5</button>
      </div>
    })
  }

  return (
    
      <div className="data">
      {display()}
      </div>
  

  );
}

                    