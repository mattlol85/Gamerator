import React, { useState, useEffect } from 'react';
import "./styles/GameCard.css";



export default function GameCard(props) {

  return (
    <div className="gameCardDiv">
        <img src={props.gameData.backgroundImg} className="imgCard" />
        <h2 className="header">{props.gameData.gameName} </h2>
        <p>{props.gameData.developer}</p>
        <br></br>
        <div className="cardPlacement">
        </div>
    </div>
  );
}
