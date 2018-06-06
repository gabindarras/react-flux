import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Smiley from './smiley/components/smiley.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Flux</h1>
        </header>
        <Smiley />
      </div>
    );
  }
}

export default App;
