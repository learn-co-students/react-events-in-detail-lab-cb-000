import React from 'react';

export default class CoordinatesButton extends React.Component {
  render() {
    return(
      <div className="buttonContainer">
        <button onClick={this.handleClick}/>
      </div>
    )
  }

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }
}
