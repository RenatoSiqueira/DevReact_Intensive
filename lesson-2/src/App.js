import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ChildrenTest from './ChildrenTest'
import MeuIp from './MeuIp'

const Error404 = ()=> <h1>Error</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ChildrenTest>
            <h1>Test with Children and Component Styled</h1>
          </ChildrenTest>
          <ChildrenTest>
            <h2>Test with Children and Component Styled</h2>
          </ChildrenTest>
          <Switch>
            <Route path="/test" component={MeuIp} />
            <Route exact path="/test" component={MeuIp} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
