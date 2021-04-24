import React from 'react'

class DelayedButton extends React.Component {
  
  clickHandler = (event) => {
  event.persist()
  setTimeout(() => {
    this.props.onDelayedClick(event)
  }, this.props.delay)
}
  
  render() {
    return(
      <button onClick={this.clickHandler}>This is a button</button>
    );
  }
}

export default DelayedButton;