import React, { Component } from 'react';
import { render } from 'react-dom';
import GSAPModal from "./modal";
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <GSAPModal />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
