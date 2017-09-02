// react
import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { lightSetStatus } from "../../actions/light";

// style
import './Light.css';

// component
class Light extends Component {
  render() {
    // extract props
    const {isOn, color} = this.props

    // jsx
    return (
      <p>
        The light is {isOn ? "On" : "Off"} and the color {color}.
      </p>
    );
  }
}

// link react and redux
const mapStateToProps = state => ({
  isOn: state.light.isOn,
  color: state.light.color
})

export default connect(mapStateToProps)(Light)
