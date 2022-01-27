import React, { useState,useEffect } from 'react';
import "./styles/GameCard.css"; 
import {UserEmail} from '../App'

export default function GameCard(props) {
  const [games, setGames] = useState([]);
  var user = React.useContext(UserEmail)

  async function rateGame(rating,id,email){
    let vote = await (await fetch(`http://localhost:8080/user/${user}/${id}`,{method:'PUT'})).json()
    console.log(vote)
    if(vote)
    {await fetch(`http://localhost:8080/${id}/${rating}`,{method:'PUT'})}
    else{alert("You have already voted on this game!")}
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
        <h4 className="rating"> Metacritic rating: {games.metaRating!='null'?games.metaRating:'N/A'} / RAWG rating: {games.userRating}</h4>
        <button onClick={()=>rateGame(1,games.id,user)}>1</button>
        <button onClick={()=>rateGame(2,games.id,user)}>2</button>
        <button onClick={()=>rateGame(3,games.id,user)}>3</button>
        <button onClick={()=>rateGame(4,games.id,user)}>4</button>
        <button onClick={()=>rateGame(5,games.id,user)}>5</button>
      </div>
    })
  }

  return (
    
      <div className="data">
      {display()}
      </div>
  

  );
}

