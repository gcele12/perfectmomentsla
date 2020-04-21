import React, { Component } from 'react';

import Toolbar from './componets/HomePage/HomePage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <main style={{ marginTop: "100px" }}>
          <p></p>
        </main>
      </div>
    );
  }
}

export default App;
