import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';

import './styles/StartPage.css';
export default function StartPage(){

    const responseGoogle = (response) => {
  console.log(response);
}
return(
    <div className="StartPage">
    {/* <div className="Logo"> Welcome to GameRater</div> */}
    <h1 className="animate">Welcome to GamerRater!</h1>
    <h2 className="log"> Log in </h2>
    <Link to="/home">
       <button className="HomeLink"> Home </button>
    </Link > 
     <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    className="googleLogin"
  />
    </div>

)
}