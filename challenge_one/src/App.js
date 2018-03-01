import React, { Component } from 'react'

import Header from './components/Header'
import Main from './components/Main'
//import Footer from './components/Footer'  TO-DO: Add more later

class App extends Component {
  render() {
    return (
       <div>
         <Header />
         <Main />
       </div>
    )
  }
}

export default App
