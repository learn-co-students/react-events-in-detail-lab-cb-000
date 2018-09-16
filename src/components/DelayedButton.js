import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (e) => {
    setTimeout(this.props.onDelayedClick(e), this.props.delay)
  }

  render() {
    return <button onClick={handleClick}>Log on Delay!</button>
  }
}

export default DelayedButton;
