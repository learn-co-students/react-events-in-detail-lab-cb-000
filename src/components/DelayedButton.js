import React from 'react';

export default class DelayedButton extends React.Component {
  render() {
    return(
      <div className="delayedButtonContainer">
        <button onClick={this.handleClick}/>
      </div>
    )
  }

  handleClick = (e) => {
    e.persist()

    setTimeout(() => {this.props.onDelayedClick(e)},this.props.delay)
  }
}
