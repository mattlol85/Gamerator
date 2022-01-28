import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <br></br><br></br><br></br><br></br>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

