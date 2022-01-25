import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom";
import GoogleLogin from 'react-google-login';

import Navbar from "./components/Navbar";
import Home from "./components/home";
import Login from "./components/login";
import GameCard from "./components/GameCard";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path= "/home" element={<Home />}/> 
    </Routes>
    <Routes>
      <Route path= "/login" element={<Login />}/> 
    </Routes>
    </div>
  );
}

export default App;
