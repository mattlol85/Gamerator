import React from "react";
import { Link } from "react-router-dom";

export default function StartPage(){
return(
    <div className="StartPage">
    {/* <div className="Logo"> Welcome to GameRater</div> */}
    <h1>Welcome to GamerRater!</h1>

    <Link className="home" to="/home">
        Home
      </Link >
    <Link className="login" to="/login">
        Log in using Google
      </Link >
    </div>
)
}