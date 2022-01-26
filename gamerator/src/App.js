import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import GoogleLogin from 'react-google-login';
//importing components from Components Folder
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import StartPage from "./components/StartPage";
import GameCard from "./components/GameCard";
import Leaderboard from "./components/Leaderboard"
import Action from "./components/Action";
import Adventure from "./components/Adventure";
import Indie from "./components/Indie"
import Shooter from "./components/Shooter"
import RPG from "./components/Rpg"
//footer import
import Footer from "./components/Footer";


function App() {
  //userState
  //isLoggedIn
  //LogInCheck
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/home" element={<><Navbar /><Home /></>} />
        <Route path="/action" element={<><Navbar /><Action /></>} />
        <Route path="/adventure" element={<><Navbar /><Adventure /></>} />
        <Route path="/indie" element={<><Navbar /><Indie /></>} />
        <Route path="/shooter" element={<><Navbar /><Shooter /></>} />
        <Route path="/rpg" element={<><Navbar /><RPG /></>} />
        <Route path="/leaderboard" element={<><Navbar /><Leaderboard /></>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
