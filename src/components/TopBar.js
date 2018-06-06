import React, { Component } from 'react';
import logo from '../logo.svg';
import './TopBar.css';

// Stores
import { SmileyStore } from '../smiley/stores/smiley.store';
import { WeatherStore } from '../weater/store/weather.store';

class TopBar extends Component {
  constructor() {
    super();
    this.state = this.getStatesFromStores();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount = () => {
    SmileyStore.addChangeListener(this.onChange);
    WeatherStore.addChangeListener(this.onChange);
  };

  componentWillUnmount = () => {
    SmileyStore.removeChangeListener(this.onChange);
    WeatherStore.removeChangeListener(this.onChange);
  };

  render() {
    const smileyLeftStyle = `${this.state.currentSmiley.img} fa-5x smiley-left`;
    const smileyRightStyle = `${this.state.currentSmiley.img} fa-5x smiley-right`;
    return (
      <header className="App-header">
        <i className={smileyLeftStyle} />
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.state.currentWeather}</h1>
        <i className={smileyRightStyle} />
      </header>
    );
  }

  onChange() {
    this.setState(this.getStatesFromStores);
  }

  getStatesFromStores() {
    return {
      currentSmiley: SmileyStore.getCurrentSmiley(),
      currentWeather: WeatherStore.getWeather()
    };
  }
}

export default TopBar;
