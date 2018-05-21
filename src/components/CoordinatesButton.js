// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  createCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }
  render() {
    return(
      <button onClick={this.createCoordinates}>Click Me</button>
    )
  }
}
