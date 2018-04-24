import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (event) => { //this component takes 2 props, onDelayedClick and delay 
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    );
  }
}

export default DelayedButton
