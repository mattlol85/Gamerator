//import React from 'react';
import { ExternalLink } from "react-external-link";
import './styles/Footer.css';

export default function Footer() {


    return (
      <div id="footer">
        <div id="footerItems">
          <ExternalLink href="https://www.linkedin.com/in/fernrey/"  style={{textDecoration:"none", color: "#5c8fff"}}>Fernando Reyes |</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/matthew-fitzgerald-3040b6160/"  style={{textDecoration:"none", color: "#5c8fff"}}> Matthew Fitzgerald |</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/leonardogalan/"  style={{textDecoration:"none", color: "#5c8fff"}}> Leonardo Galan |</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/rmpolanco/" style={{textDecoration:"none", color: "#5c8fff"}}> Ramon Polanco |</ExternalLink>
        </div>
        <div id="bottomOfFooter" className="center">
          Ⓒ Group 6
        </div>
      </div>
    );
}
