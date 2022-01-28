import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar(props) {

  const [loggedIn,SetLoginStatus] = useState(localStorage.getItem('loginState')?localStorage.getItem('loginState'):'false')
  const [currentUser,SetUser] = useState(localStorage.getItem('userId')?localStorage.getItem('userId'):'null')
  
  async function logOutHandler(){
    localStorage.setItem('loginState','false')
    localStorage.setItem('userId','null')
    props.SetLoginStatus('false')
    props.SetUser('null')
    console.log("Logged out!")
  }
  

  return (
    <nav className="navbar">
      
      <Link className="home" to="/home">
        GameRator
      </Link >

      <Link className="leaderboard" to="/Leaderboard">
        Leaderboard
      </Link >
     
      <Link className="action" to="/Action">
        Action
      </Link >
     
      <Link className="adventure" to="/Adventure">
        Adventure
      </Link >
      
      <Link className="indie" to="/Indie">
        Indie
      </Link >

      <Link className="shooter" to="/Shooter">
        Shooter
      </Link >
     
      <Link className="rpg" to="/Rpg">
        RPG
      </Link >
      <button id='logoutBtn' onClick={logOutHandler}>LOGOUT
      </button>
      
    
    </nav>
  );
}
