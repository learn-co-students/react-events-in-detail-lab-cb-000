import React from 'react'; //goes at the top of all react

class CoordinatesButton extends React.Component {
  handleClick = (event) => { //takes one prop onReceiveCoordinates, it is a function
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coords</button>
    );
  }
}

export default CoordinatesButton
