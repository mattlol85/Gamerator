import React, { useState, useEffect } from 'react';
import "./styles/GameCardContainer.css";
import GameCard from './GameCard';
import GameCardPopup from './GameCardPopup';
import Popup from 'reactjs-popup';

export default function GameCardContainer(props) {


  const [games, setGames] = useState([]);

  
  useEffect(() => {
    fetch(`https://${process.env.REACT_APP_HOSTNAME}/${props.gameType}/limit=24`)
      .then(res => res.json())
      .then(
        (result) => {
          setGames(result);


        },
      )
  }, [])

  //displays the imformation that is fetched
  const display = () => {
    return games.map((games) => {


      return <Popup trigger={<div><GameCard gameData={games}/></div>} closeOnDocumentClick><GameCardPopup gameData={games}/></Popup>})
  }

  return (
   
    <div className="data">
      {display()}
      {/* <GameCardPopup show={true} /> */}
    </div>
    

  );

}
