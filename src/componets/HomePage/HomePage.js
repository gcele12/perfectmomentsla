import React from "react";
import "./HomePage.css";
import perfectmoments from "../../assets/pmlogo.png";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div></div>
      <div
        className="toolbar_logo"
        img
        src={perfectmoments}
        alt="Perfect Moments"
        id="perfectmoments"
      >
        <a href="/"></a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <div>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
            <li>
              <a href="/">LINEN RENTALS</a>
            </li>
            <li>
              <a href="/">WEDDING PACKAGE OPTIONS</a>
            </li>
            <li>
              <a href="/">GALLERY</a>
            </li>
            <li>
              <a href="/">TIPS FOR BRIDES</a>
            </li>
            <li>
              <a href="/">CLIENT PORTAL</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default toolbar;
