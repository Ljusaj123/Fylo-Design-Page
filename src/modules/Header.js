import React from "react";
import Navbar from "../components/Navbar";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src="./images/logo.svg" alt="aaaa" id="logo" />
        </div>
        <Navbar />
        <div className="intro-container">
          <img
            src="./images/illustration-intro.png"
            alt=""
            className="intro-pic"
          />
          <h2 className="intro-title">
            All your files in one secure location, accessible anywhere.
          </h2>
          <p className="intro-text">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="button">Get Started</button>
        </div>
        <img
          src="./images/bg-curvy-desktop.svg"
          alt="aaaaaaaa"
          id="background-header"
        />
      </div>
    </header>
  );
}

export default Header;
