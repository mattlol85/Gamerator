import React from "react";
import './styles/Home.css'

export default function Home() {

    // Hooks
    
    return (
        <div className="homePage">
            <div id="homeContent" >
                <h2>🎮Welcome To Gamerator</h2>
                <p>Gamerator is a place where gamers can come together and see
                once and for all if the top games really stand the test of the *current* times. Gamerator strides
                to be #1 when it comes to ultra small-scale applications.</p>
                <br/>
                <br/>
                <h2>✅Get Your Vote On</h2>
                <p>Voting for your favorite game lets us know what you like, and most importantly
                what you, the people, want. Be careful, you can only vote once... so make it count.
                </p>
                <br/>
                <br/>
                <h2>💙 Made With Love</h2>
                <h3 id="smallText">By four handsome programmers...</h3>
                <p>This application was made using React.JS, Posgres, Node.JS, and Express. The backend of this applicaton is deployed on Heroku
                    and the front on Netlify.
                </p>
                <h2>💼  Hire Us</h2>
                <h3 id="smallestText">please</h3>
                </div>

        </div>
    )
}

