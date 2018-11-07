import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import MultipleElements from "./multiple-elements.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="container">
        <MultipleElements />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
