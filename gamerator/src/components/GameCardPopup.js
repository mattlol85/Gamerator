import React, { useState, useEffect } from 'react';
import "./styles/GameCardPopup.css";
import Popup from 'reactjs-popup';
import star1 from '../img/Star1.png'
import star2 from '../img/Star2.png'
import star3 from '../img/Star3.png'
import star4 from '../img/Star4.png'
import star5 from '../img/Star5.png'
import { UserEmail } from '../App'

export default function GameCardPopup(props) {

    var user = React.useContext(UserEmail)

    var date = props.gameData.releaseDate.split("-").reverse()
    let temp = date[0]
    date[0]=date[1]
    date[1]=temp
    date = date.join("/")

    async function rateGame(rating, id, email) {
        let vote = await (await fetch(`http://${process.env.REACT_APP_HOSTNAME}:8080/user/${user}/${props.gameData.id}`, { method: 'PUT' })).json()
        console.log(vote)
        if (vote) { await fetch(`http://${process.env.REACT_APP_HOSTNAME}:8080/${props.gameData.id}/${rating}`, { method: 'PUT' }) }
        else { alert("You have already voted on this game!") }
      }
    
    return (
        <div className="bigCard">

            <div className='col'>
                <Popup trigger={<img id='bigCardImg' src={props.gameData.backgroundImg} />} closeOnDocumentClick><img className="popupBigImg" src={props.gameData.backgroundImg} height="60%" width="60%"></img></Popup>
                <br></br><br></br>
                <p><strong>{props.gameData.genres.join('/ ')}</strong></p>
                <p>Released: {date}</p>
                {props.gameData.developer!==''?<p>Created by: {props.gameData.developer}</p>:<p></p>}
                {props.gameData.publisher!==''?<p>Published by: {props.gameData.publisher}</p>:<p></p>}
                {props.gameData.esrbRating!==''?<p>ESRB Rating: {props.gameData.esrbRating}</p>:<p></p>}
                <a href={props.gameData.website}>Game Website</a><br></br>
                {props.gameData.subreddit!==''?<a href={props.gameData.subreddit}>Game Reddit</a>:<p></p>}
                <h3>Metacritic Score: {props.gameData.metaRating}</h3>
                <h3>RAWG Score:</h3>
                <p><strong>{props.gameData.userRating} out of 5</strong> | from {props.gameData.numUserRatings} user reviews</p>
                
            </div>
            <div className='col'>
            <h1 id='gameName'>{props.gameData.gameName}</h1>
                <p id="gameDesc">
                    {props.gameData.description}
                    <br></br>
                    <h2>Rate this game below</h2>
                    <button className='btnClass' onClick={() => rateGame(1, props.gameData.id, user)}><img src={star1} /></button>
                    <button className='btnClass' onClick={() => rateGame(2, props.gameData.id, user)}><img src={star2} /></button>
                    <button className='btnClass' onClick={() => rateGame(3, props.gameData.id, user)}><img src={star3} /></button>
                    <button className='btnClass' onClick={() => rateGame(4, props.gameData.id, user)}><img src={star4} /></button>
                    <button className='btnClass' onClick={() => rateGame(5, props.gameData.id, user)}><img src={star5} /></button>
                </p>
            </div>
            <div className='col'>
                <h2>Screenshots</h2>
                {props.gameData.images.slice(1).map((element)=><Popup trigger={<img className="screenshots" src={element} height="17%" width="70%"></img>} closeOnDocumentClick><img className="popupScreenshot" src={element} height="50%" width="50%"></img></Popup>)}
            </div>

        </div>
    )
}

