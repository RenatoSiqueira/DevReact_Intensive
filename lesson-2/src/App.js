import React, { Component } from 'react';
import './App.css';

import ChildrenTest from './ChildrenTest'
import MeuIp from './MeuIp'

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
        <MeuIp />
      </div>
    );
  }
}

export default App
