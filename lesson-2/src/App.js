import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ChildrenTest from './ChildrenTest'
import MeuIp from './MeuIp'

/* Simple Redux example work */
const redux = require('redux')

const counterReducer = (state=0, action) => {
    if(action.type === 'SOMA'){
        return state + action.value
    }
    return state
}

const soma = { type: 'SOMA', value: 3 }
const subt = { type: 'SUBT', value: 3 }

const store = redux.createStore(counterReducer)

store.dispatch(soma)
store.dispatch(soma)
store.dispatch(subt)

/* console.log(store.getState()) */

const Error404 = ()=> <h1>Error</h1>

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      store: 0
    }

    store.subscribe( () => {
        this.setState({ store: store.getState() })
    })    
  }
  render() {
    return (
      <Router>
        <div className="App">
          <button onClick={ () => store.dispatch(soma) }>Somar</button>
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
