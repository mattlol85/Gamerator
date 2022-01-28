import React from "react";
import './styles/Home.css'

export default function Home() {

    // Hooks

    return (
        <div className="homePage">
            <div id="homeContent" >
                <div className="about">

                    <h2>🎮Welcome</h2>
                    <h3>Gamerator is a place where gamers can come together and see
                        once and for all if the top games really stand the test of the <i>current</i> times. Gamerator strides
                        to be #1 when it comes to ultra small-scale applications.</h3>
                </div>
                <br />
                <br />
                <div className="about">
                    <h2>✅Get Your Vote On</h2>
                    <h3>Voting for your favorite game lets us know what you like, and most importantly
                        what you, the people, want. Be careful, you can only vote once... so make it count.
                    </h3>
                </div>
                <br />
                <br />
                <div className="about">

                    <h2>💙 Made With Love</h2>
                    <p id="smallText">By four handsome programmers...</p>
                    <h3>This application was made using React.JS, PostgreSQL, Node.JS, and Express. The backend and frontend of this applicaton is deployed on Heroku.
                    </h3>
                </div>
                <br />
                <div className="about">
                    <h2>💼  Hire Us</h2>
                    <h3 id="smallText">please</h3>
                </div>
            </div>
        </div>
    )
}

