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
        let vote = await (await fetch(`http://localhost:8080/user/${user}/${props.gameData.id}`, { method: 'PUT' })).json()
        console.log(vote)
        if (vote) { await fetch(`http://localhost:8080/${props.gameData.id}/${rating}`, { method: 'PUT' }) }
        else { alert("You have already voted on this game!") }
      }
    
    return (
        <div class="bigCard">

            <div id='col'>
                <img id='bigCardImg' src={props.gameData.backgroundImg} />
                <br></br><br></br>
                <p><strong>{props.gameData.genres.join('/ ')}</strong></p>
                <p>Released: {date}</p>
                {props.gameData.developer!==''?<p>Created by: {props.gameData.developer}</p>:<p></p>}
                {props.gameData.publisher!==''?<p>Published by: {props.gameData.publisher}</p>:<p></p>}
                <a href={props.gameData.website}>Game Website</a><br></br>
                {props.gameData.subreddit!==''?<a href={props.gameData.subreddit}>Game Reddit</a>:<p></p>}
                <h2>Metacritic Score:</h2>
                <h3>{props.gameData.metaRating} out of 5</h3>
                <h2>RAWG Score:</h2>
                <h3>{props.gameData.userRating} out of 5</h3>
                <h4>from {props.gameData.numUserRatings} user reviews</h4>
                
            </div>
            <div id='col'>
            <h1>{props.gameData.gameName}</h1>
                <h2>Description</h2>
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
            <div id='col'>
                <h2>Screenshots</h2>
                {props.gameData.images.slice(1).map((element)=><><img className="screenshots" src={element} height="17%" width="70%"></img></>)}
            </div>

        </div>
    )
}

