// react
import React, { Component } from 'react'

// redux
// -- nothing here --

// style
import './App.css'

// components
import Light from "../Light/Light"
import LightControls from "../LightControls/LightControls"

// App
class App extends Component {
  render() {
    return (
      <main>
        <Light />
      </main>
    )
  }
}

export default App
