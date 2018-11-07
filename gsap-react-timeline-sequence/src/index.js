import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';

import TimelineSequence from "./timeline-sequence.js";

class App extends Component {

  render() {
    return (
      <div className="container">
        <TimelineSequence />
      </div>
    );
  }

}

render(<App />, document.getElementById('root'));
