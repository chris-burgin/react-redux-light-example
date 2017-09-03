// react
import React, { Component } from 'react'

// style
import './App.css'

// components
import Light from "../Light/Light"
import Suspects from "../Suspects/Suspects"

// App
class App extends Component {
  render() {
    return (
      <main>
        <Light />
        <Suspects />
      </main>
    )
  }
}

export default App
