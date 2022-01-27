import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';

import './styles/StartPage.css';
export default function StartPage(props){

    const responseGoogle = (response) => {
  console.log(response);
}
async function handleLogin(data){
  await fetch(`http://localhost:8080/user/${data.profileObj.email}`,{method:'POST'})
  localStorage.setItem('loginState','true')
  localStorage.setItem('userId',data.profileObj.email)
  props.SetLoginStatus('true')
  props.SetUser(data.profileObj.email)
}
function handleFailure(result){
  
  alert(result.error)
  localStorage.setItem('loginState','false')
  localStorage.setItem('userId','null')
  props.SetLoginStatus('false')
  props.SetUser('null')
}
return(
    <div className="StartPage">
    {/* <div className="Logo"> Welcome to GameRater</div> */}
    <h1 className="animate">Welcome to GamerRater!</h1>
    <h2 className="log"> Log in </h2>
     <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLEID}
    buttonText="Login"
    buttonText="Log in using Google"
      onSuccess={handleLogin}
      onFailure={handleFailure}
  />
    </div>

)
}