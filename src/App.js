import React, { Component } from 'react';
import './App.css';

// Components
import Smiley from './smiley/components/smiley.component';
import Topbar from './components/TopBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Smiley />
      </div>
    );
  }
}

export default App;
