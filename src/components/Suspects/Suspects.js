// react
import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';

// style
import './Suspects.css';

// component
class Suspects extends Component {
  render() {
    // extract props
    const {suspectCount} = this.props

    // jsx
    return (
      <div className="RandomItem">
        {[...Array(suspectCount).keys()]
          .map(i => <i key={i} className="fa fa-user"/>)}
      </div>
    );
  }
}

// link react and redux
const mapStateToProps = state => ({
  suspectCount: state.light.suspectCount
})

export default connect(mapStateToProps)(Suspects)
