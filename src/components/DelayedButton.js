import React from 'react';

class DelayedButton extends React.Component {

  // either persist the event with event.persist() (as shown) or store the event in a variable (as commented), so it can be referenced within the callback of setTimeout(). They both work, but the variable approach doesn't pass the tests.
  clickHandler = (event) => {
    // const thisEvent = event
    event.persist()
    setTimeout(() => {
      // this.props.onDelayedClick(thisEvent)
      this.props.onDelayedClick(event)
    }, this.props.delay)
    }

  render() {
    return (
      <button onClick={this.clickHandler}>This is a button</button>
    )
  }
}
export default DelayedButton