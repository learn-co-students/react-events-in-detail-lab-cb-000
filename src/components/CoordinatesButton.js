import React from 'react' ;

export default class CoordinatesButton extends React.Component {
//  onReceiveCoordinates = this.props.onReceiveCoordinates ;
  doFunction = (event) => {
    var x = event.clientX ;
    var y = event.clientY ;
    var ray = [x, y] ;
    this.props.onReceiveCoordinates(ray) ;
  }

  render() {
    return (
      <div>
        <button onClick={this.doFunction} />
      </div>
    )
  }
}
