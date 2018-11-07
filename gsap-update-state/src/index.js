import React, { Component } from 'react';
import { render } from 'react-dom';
import UpdateState from "./update-state";

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <UpdateState />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
