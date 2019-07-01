// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component
{
  constructor(props)
  {
    super(props);
    this.arrayXY = [];
  }

  handleClick = (event) => {
    this.arrayXY = [event.clientX,event.clientY];
    this.props.onReceiveCoordinates(this.arrayXY);
  }

  render()
  {
    return(<button onClick={this.handleClick}></button>);
  }
}
