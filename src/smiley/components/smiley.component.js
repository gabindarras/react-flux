import React, { Component } from 'react';
import './smiley.css';

// Stores
import { SmileyStore } from '../stores/smiley.store';

// Actions
import { SmileyActions } from '../actions/smiley.actions';

class Smiley extends Component {
  constructor() {
    super();
    this.state = this.getStatesFromStores();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount = () => {
    SmileyStore.addChangeListener(this.onChange);
  };

  componentWillUnmount = () => {
    SmileyStore.removeChangeListener(this.onChange);
  };

  render() {
    const currentSmileyStyle = `${this.state.currentSmiley.img} fa-8x`;
    return (
      <div>
        {this.state.smileyList.map((smiley, i) => {
          const className = `${smiley.img} fa-5x`;
          const selectSmiley = this.selectSmiley.bind(this, smiley.id);
          return <i className={className} key={i} onClick={selectSmiley} />;
        })}
        <i className={currentSmileyStyle} />
      </div>
    );
  }

  selectSmiley(id) {
    SmileyActions.selectSmiley(id);
  }

  onChange() {
    this.setState(this.getStatesFromStores);
  }

  getStatesFromStores() {
    return {
      currentSmiley: SmileyStore.getCurrentSmiley(),
      smileyList: SmileyStore.getSmileyList()
    };
  }
}

export default Smiley;
