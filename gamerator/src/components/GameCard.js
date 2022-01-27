import React, { useState, useEffect } from 'react';
import "./styles/GameCard.css";
import { UserEmail } from '../App'

export default function GameCard(props) {
  var user = React.useContext(UserEmail)

  async function rateGame(rating, id, email) {
    let vote = await (await fetch(`http://localhost:8080/user/${user}/${props.gameData.id}`, { method: 'PUT' })).json()
    console.log(vote)
    if (vote) { await fetch(`http://localhost:8080/${props.gameData.id}/${rating}`, { method: 'PUT' }) }
    else { alert("You have already voted on this game!") }
  }

  return (
    <div className="data">
        <img src={props.gameData.backgroundImg} className="imgCard" />
        <h2 className="header">{props.gameData.gameName} </h2>
        <div className="cardPlacement">
        </div>
        <h3 className="rating"> {props.gameData.esrbRating} / {props.gameData.genres}</h3>
        <h3 className="genre"> </h3> {/*moved genre to make space in the card for the buttons*/}
        <h4 className="rating"> Metacritic rating: {props.gameData.metaRating != 'null' ? props.gameData.metaRating : 'N/A'} / RAWG rating: {props.gameData.userRating}</h4>
        <button onClick={() => rateGame(1, props.gameData.id, user)}>1</button>
        <button onClick={() => rateGame(2, props.gameData.id, user)}>2</button>
        <button onClick={() => rateGame(3, props.gameData.id, user)}>3</button>
        <button onClick={() => rateGame(4, props.gameData.id, user)}>4</button>
        <button onClick={() => rateGame(5, props.gameData.id, user)}>5</button>
    </div>
  );
}
