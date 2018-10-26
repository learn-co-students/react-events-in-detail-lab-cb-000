import React from 'react'

export default class DelayedButton extends React.Component{

  handleEvent = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render(){
    return(
      <button onClick={this.handleEvent}>Button</button>
    )
  }
}
