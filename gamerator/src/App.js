import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import GoogleLogin from 'react-google-login';
//importing components from Components Folder
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Login from "./components/login";
import StartPage from "./components/StartPage";
import GameCard from "./components/GameCard";
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
      <Route path="/" element={<StartPage/>}></Route>
    </Routes>
    <Routes>
      <Route path= "/home" element={<><Navbar/><Home/></>}/> 
    </Routes>
    <Routes>
      <Route path= "/action" element={<><Navbar/><Action /></>}/> 
    </Routes>
    <Routes>
      <Route path= "/adventure" element={<><Navbar/><Adventure /></>}/> 
    </Routes>
    <Routes>
      <Route path= "/indie" element={<><Navbar/><Indie /></>}/> 
    </Routes>
    <Routes>
      <Route path= "/shooter" element={<><Navbar/><Shooter/></>}/> 
    </Routes>
     <Routes>
      <Route path= "/rpg" element={<><Navbar/><RPG /></>}/> 
    </Routes>
    <Routes>
      <Route path= "/login" element={<Login />}/> 
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
