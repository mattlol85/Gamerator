import React, { useState, useEffect } from 'react';
import "./styles/GameCardContainer.css";
import GameCard from './GameCard';
import GameCardPopup from './GameCardPopup';

export default function GameCardContainer(props) {


  const [games, setGames] = useState([]);

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = function () {
    console.log("CLICKED")
    setShowPopup(true);
  }
  useEffect(() => {
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
  const display = () => {
    return games.map((games) => {

      const gameCardConfig = {
        gameName: games.gameName,
        esrbRating: games.esrbRating,
        genres: games.genres,
        metaRating: games.metaRating,
        userRating: games.userRating,
        backgroundImg: games.backgroundImg,
        id: games.id
      }

      return <div key={games.id} className="gameCardDiv" onClick={() => {
        setShowPopup(true);

      }}>
        <GameCard gameData={gameCardConfig} />
        {/* <BigGameCard show={showPopup}/> */}
      </div>
    })
  }

  return (
   
    <div className="data">
      {display()}
      {/* <GameCardPopup show={true} /> */}
    </div>
    

  );

}
