import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div id='buttons'>
        <i className='fa fa-th' aria-hidden='true' onClick={this.props.seed} title='Seed Board'></i>
        <i className='fa fa-play' aria-hidden='true' onClick={this.props.play} title='Play'></i>
        <i className='fa fa-pause' aria-hidden='true' onClick={this.props.pause} title='Pause'></i>
        <i className='fas fa-redo-alt' aria-hidden='true' onClick={this.props.reset} title='Reset'></i>
      </div>
    );
  }
}

export default Buttons;
