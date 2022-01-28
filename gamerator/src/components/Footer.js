//import React from 'react';
import { ExternalLink } from "react-external-link";
import './styles/Footer.css';

export default function Footer() {


    return (
      <div id="footer">
        <div id="footerItems">
          <ExternalLink href="https://www.linkedin.com/in/fernrey/" >Fernando Reyes |</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/matthew-fitzgerald-3040b6160/"> Matthew Fitzgerald |</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/leonardogalan/"> Leonardo Galan |</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/ramon-m-polanco/"> Ramon Polanco |</ExternalLink>
        </div>
        <div id="bottomOfFooter" className="center">
          Ⓒ Group 6
        </div>
      </div>
    );
}