import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import GoogleLogin from 'react-google-login';
//importing components from Components Folder
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import GameCard from "./components/GameCard";
import Action from "./components/Action";
import Adventure from "./components/Adventure";
import Indie from "./components/Indie"
import Shooter from "./components/Shooter"
import RPG from "./components/Rpg"
//footer import
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path= "/home" element={<Home 
        />}/> 
    </Routes>
    <Routes>
      <Route path= "/action" element={<Action />}/> 
    </Routes>
    <Routes>
      <Route path= "/adventure" element={<Adventure />}/> 
    </Routes>
    <Routes>
      <Route path= "/indie" element={<Indie />}/> 
    </Routes>
    <Routes>
      <Route path= "/shooter" element={<Shooter/>}/> 
    </Routes>
     <Routes>
      <Route path= "/rpg" element={<RPG />}/> 
    </Routes>
    

    <Footer />
    </div>
  );
}

export default App;
