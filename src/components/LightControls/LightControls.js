// react
import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { lightSetStatus } from "../../actions/light"

// style
import './LightControls.css';

// LightControls
class LightControls extends Component {
  constructor() {
    super()
    
    // bind functions
    this.toggleLight = this.toggleLight.bind(this)
  }

  // toggle light
  toggleLight() {
    // extract light info
    const {isOn} = this.props.light

    // exract functions from props
    const {lightSetStatus} = this.props

    // toggle the light
    lightSetStatus(!isOn)
  }

  render() {
    // extract functions
    const {toggleLight} = this
    
    // jsx
    return (
      <button onClick={toggleLight}> light controls </button>
    );
  }
}

// link react and redux
const mapStateToProps = state => ({
  light: state.light
})

const mapDispatchToProps = dispatch => ({
  lightSetStatus: bool => dispatch(lightSetStatus(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(LightControls)
