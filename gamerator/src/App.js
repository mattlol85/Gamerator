import React,{useState,setState} from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Navigate} from "react-router-dom";
import GoogleLogin from 'react-google-login';
//importing components from Components Folder
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import FrontPage from "./components/FrontPage";
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

const [loggedIn,SetLoginStatus] = useState(true)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="/home" element={<><Navbar /><Home /></>} />
        <Route path="/action" element={!loggedIn?<Navigate to="/login"/>:<><Navbar /><Action /></>} />
        <Route path="/adventure" element={!loggedIn?<Navigate to="/login"/>:<><Navbar /><Adventure /></>} />
        <Route path="/indie" element={!loggedIn?<Navigate to="/login"/>:<><Navbar /><Indie /></>} />
        <Route path="/shooter" element={!loggedIn?<Navigate to="/login"/>:<><Navbar /><Shooter /></>} />
        <Route path="/rpg" element={!loggedIn?<Navigate to="/login"/>:<><Navbar /><RPG /></>} />
        <Route path="/leaderboard" element={!loggedIn?<Navigate to="/login"/>:<><Navbar /><Leaderboard /></>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
