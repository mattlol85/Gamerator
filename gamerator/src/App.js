import React,{useState,setState} from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Navigate} from "react-router-dom";
//importing components from Components Folder
import Navbar from "./components/Navbar";
import Home from "./components/Home";
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

export const UserEmail = React.createContext(null);

function App() {

const [loggedIn,SetLoginStatus] = useState(localStorage.getItem('loginState')?localStorage.getItem('loginState'):'false')
const [currentUser,SetUser] = useState(localStorage.getItem('userId')?localStorage.getItem('userId'):'null')

async function logOutHandler(){
  localStorage.setItem('loginState','false')
  localStorage.setItem('userId','null')
  SetLoginStatus('false')
  SetUser('null')
  console.log("Logged out!")
}

  return (
    <UserEmail.Provider value={currentUser}>
    <div className="App">
      <Routes>
        <Route path="/" element={loggedIn==='true'?<Navigate to="/home"/>:<FrontPage SetUser={SetUser} SetLoginStatus={SetLoginStatus}/>}></Route>
        <Route path="/home" element={loggedIn==='false'?<Navigate to="/"/>:
        <><Navbar />
        <h1>Welcome {currentUser}!</h1>
        <button onClick={logOutHandler}>LOGOUT</button>
        <Home /></>} />
        <Route path="/action" element={loggedIn==='false'?<Navigate to="/"/>:<><Navbar /><Action /></>} />
        <Route path="/adventure" element={loggedIn==='false'?<Navigate to="/"/>:<><Navbar /><Adventure /></>} />
        <Route path="/indie" element={loggedIn==='false'?<Navigate to="/"/>:<><Navbar /><Indie /></>} />
        <Route path="/shooter" element={loggedIn==='false'?<Navigate to="/"/>:<><Navbar /><Shooter /></>} />
        <Route path="/rpg" element={loggedIn==='false'?<Navigate to="/"/>:<><Navbar /><RPG /></>} />
        <Route path="/leaderboard" element={loggedIn==='false'?<Navigate to="/"/>:<><Navbar /><Leaderboard /></>} />
      </Routes>
    </div>
    </UserEmail.Provider>
  );
}

export default App;
