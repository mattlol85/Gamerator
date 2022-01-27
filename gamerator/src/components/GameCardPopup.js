import React, { useState, useEffect } from 'react';
import "./styles/GameCardPopup.css";
import Popup from 'reactjs-popup';


export default function GameCardPopup(props) {
    // HOOKS
    const contentStyle = {
        all: "revert",
      };
      console.log(props.show);
    return (
        
        <Popup trigger={() => {return true;}} contentStyle={contentStyle}>
        <div class="bigCard">

            <div id='col'>
                <img id='bigCardImg' src='https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg' />
                <div id='links'> LINK | LINK | LINK | LINK </div>
            </div>
            <div id='col'>
                <p id="gameDesc">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div id='col'>
                <h1 id="gameTitle"> The Elder Scrolls: Skyrim</h1>
                <div>
                    <h2>Votes:</h2>
                </div>
                <div id='stars'>
                    <img src='' />
                </div>
            </div>

        </div>
        </Popup>
    );
}

