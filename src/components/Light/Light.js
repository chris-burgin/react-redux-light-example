// react
import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { lightSetStatus, lightSetSuspectCount } from "../../actions/light";

// style
import './Light.css';

// component
class Light extends Component {
  constructor() {
    super()
    
    // bind functions
    this.toggleLight = this.toggleLight.bind(this)
  }

  // toggle light
  toggleLight() {
    // extract light info
    const {isOn} = this.props

    // exract functions from props
    const {lightSetStatus, lightSetSuspectCount} = this.props

    // change the suspect count to a random number between 1 and 10
    lightSetSuspectCount(Math.floor((Math.random() * 10) + 1))

    // toggle the light
    lightSetStatus(!isOn)
  }
  
  render() {
    // extract props
    const {isOn} = this.props

    // extract toggle
    const {toggleLight} = this

    // jsx
    return (
      <div className="Light">
        <svg onClick={toggleLight} width="48px" viewBox="0 0 48 75" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="noun_1190160_cc" fill="#E0E0E0">
              <g id="Group" transform="translate(0.000000, 0.637820)">
                <path d="M10.1946,0.34962 C9.47409576,0.340505727 8.80438777,0.719668117 8.4414789,1.34216839 C8.07857004,1.96466865 8.07857004,2.73426135 8.4414789,3.35676161 C8.80438777,3.97926188 9.47409576,4.35842427 10.1946,4.34931 L22.0002,4.34931 L22.0002,43.3621 L14.2505,43.3621 C13.5765218,43.3621792 12.9479104,43.701709 12.5783,44.2653 L0.3514,62.9062 C-0.051472439,63.5206779 -0.0849657226,64.3065847 0.264166027,64.9531111 C0.613297776,65.5996374 1.28882841,66.0026631 2.0236,66.0028 L10.5214,66.0028 C17.5589,73.985 30.427,73.9975 37.4649,66.0028 L45.9764,66.0028 C46.7111716,66.0026631 47.3867022,65.5996374 47.735834,64.9531111 C48.0849657,64.3065847 48.0514724,63.5206779 47.6486,62.9062 L35.4218,44.2653 C35.0521896,43.701709 34.4235782,43.3621792 33.7496,43.3621 L25.9996,43.3621 L25.9996,4.34931 L37.8052,4.34931 C38.5257042,4.35842427 39.1954122,3.97926188 39.5583211,3.35676161 C39.92123,2.73426135 39.92123,1.96466865 39.5583211,1.34216839 C39.1954122,0.719668117 38.5257042,0.340505727 37.8052,0.34962 L10.1946,0.34962 L10.1946,0.34962 Z M15.3305,47.3618 L32.6696,47.3618 L42.273,62.0031 L5.7271,62.0031 L15.3305,47.3618 Z M16.699,66.0028 L31.2936,66.0028 C26.8608,68.6663 21.1336,68.6633 16.699,66.0028 Z"></path>
              </g>
            </g>
          </g>
        </svg>
        
        {isOn
          ? <div className="tri"></div>
          : false}
      </div>
    );
  }
}

// link react and redux
const mapStateToProps = state => ({
  isOn: state.light.isOn
})

const mapDispatchToProps = dispatch => ({
  lightSetStatus: bool => dispatch(lightSetStatus(bool)),
  lightSetSuspectCount: count => dispatch(lightSetSuspectCount(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(Light)
