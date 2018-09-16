import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (e) => {
    const coordinates = [e.screenX, e.screenY];
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return <button onClick={handleClick}></button>
  }
}

export default CoordinatesButton;
