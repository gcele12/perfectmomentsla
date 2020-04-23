import React, { Component } from 'react';
import perfectmoments from "./assets/PM1.jpg";

import Toolbar from './componets/HomePage/HomePage.js';

class HomePageApp extends Component {
  render() {
    return (
      <div className="HomePageApp">
        <Toolbar />
        <main style={{ marginTop: "100px" }}>
          <div>
        <img
        src={perfectmoments}
        alt="Perfect Moments"
        id="perfectmoments"></img>
      </div>
        </main> 
      </div>
    );
  }
}

export default HomePageApp;
