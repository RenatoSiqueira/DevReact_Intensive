import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Provider } from 'react-redux'
import store from './redux'

import Teste from './Teste'
import Ip from './ip'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Teste />
          <Ip />
        </div>
      </Provider>
    )
  }
}

export default App;
