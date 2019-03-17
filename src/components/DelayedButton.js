import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (event) => {
     // must persist for the event data to be available
    event.persist();
    
    // be carefule with `this` inside of setTimeout!
    const timeoutFunc = this.props.onDelayedClick;
    const delay = this.props.delay;
       
    setTimeout(timeoutFunc, delay, event);
    // OR
    // setTimeout(() => { timeoutFunc(event); }, delay);
  }
  
  render () {
    return (
      <button onClick={this.handleClick}>Delayed Button</button>
    )
  }
}

export default DelayedButton;