import React from "react";
import GoogleLogin from 'react-google-login';
import logo from '../img/logo.png'
import './styles/FrontPage.css';
export default function StartPage(props){

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
    <div className="startDiv">
    {/* <div className="Logo"> Welcome to GameRater</div> */}

    <img className="animate" src={logo} />
    <br />
    <br />
     <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLEID}
    buttonText="Log in using Google"
    onSuccess={handleLogin}
    onFailure={handleFailure}
  />
    </div>

)
}