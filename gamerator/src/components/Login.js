import React from "react";
import GoogleLogin from 'react-google-login';
export default function Login(props) {

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
  return (
    <div className="homecontainer">
      
      <h1>Log in</h1>
      <h2> google login </h2>
      <GoogleLogin
      clientId="85582065717-9s6hus9peqjkv64pc92rkehm5u5dg1ru.apps.googleusercontent.com"
      buttonText="Log in using Google"
      onSuccess={handleLogin}
      onFailure={handleFailure}
      ></GoogleLogin>
    </div>
  );
}