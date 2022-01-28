import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { UserEmail } from '../App'
import logo from '../img/logoSmall.png'

export default function Navbar(props) {
  var user = React.useContext(UserEmail)
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
        <img src={logo} />
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
      <div>
      <button className='logoutBtn' onClick={logOutHandler}>LOGOUT
      </button><p>{user}</p></div>
    
    </nav>
  );
}
