import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import GoogleLogin from 'react-google-login';

import Navbar from "./components/Navbar";
import Home from "./components/home";
import Login from "./components/login";
import StartPage from "./components/StartPage";
import GameCard from "./components/GameCard";

function App() {
  //userState
  //isLoggedIn
  //LogInCheck
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<StartPage/>}></Route>
    </Routes>
    <Routes>
      <Route path= "/home" element={<><Navbar/><Home /></>}/> 
    </Routes>
    <Routes>
      <Route path= "/login" element={<><Navbar/><Login /></>}/> 
    </Routes>
    </div>
  );
}

export default App;
