import React from 'react';

class CoordinatesButton extends React.Component {
  getMouseCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  
  render () {
    return (
      <button onClick={this.getMouseCoordinates}>Get Mouse Coordinates</button>
    )
  }
}

export default CoordinatesButton;