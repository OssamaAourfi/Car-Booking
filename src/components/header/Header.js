import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaRegBell } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useState } from "react";
import "./header.css"

function Header() {
     const [activeNav, setActiveNav] = useState("#");
    return (
      <div>
        <header>
          
            <p>Follow us on</p>
            <div className="social">
            <a href="https://www.instagram.com/ossamaaf/?hl=fr" >
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/ossamaaf/?hl=fr">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ossamaaf/?hl=fr">
              <FaInstagram />
            </a>
            </div>
          
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="connexion">
            <FaRegBell className="notification" />
            <a href="#connexion">Connexion</a>
          </div>
        </header>
        <nav>
          <a
            href="#acceuil"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            Acceuil
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "about" ? "active" : ""}
          >
           A propos
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
           Comparaison
          </a>
          <a
            href="#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#services" ? "active" : ""}
          >
            Rechange
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
          Contactez nous
          </a>
        </nav>
      </div>
    );
}

export default Header