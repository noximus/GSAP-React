import React, { Component } from 'react';
import { render } from 'react-dom';
import SimpleTransition from "./simple-transition.js";
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <SimpleTransition />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
