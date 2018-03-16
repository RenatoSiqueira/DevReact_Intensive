import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChildrenTest from './ChildrenTest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChildrenTest>
          <h1>Test with Children and Component Styled</h1>
        </ChildrenTest>
        <ChildrenTest>
          <h2>Test with Children and Component Styled</h2>
        </ChildrenTest>        
      </div>
    );
  }
}

export default App;
