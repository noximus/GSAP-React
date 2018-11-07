import React, { Component } from 'react';
import { render } from 'react-dom';
import TransitionList from "./transition-list.js";
import './style.css';
import cards from "./data.json";

class App extends Component {

  render() {
    return (
      <div>
        <TransitionList cards={cards} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
