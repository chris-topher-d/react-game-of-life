import React, { Component } from 'react';
import Box from './Box';

class Grid extends Component {
  render() {
    const gridWidth = this.props.cols * 9;
    let rowsArray = [];
    let boxClass = '';

    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        let boxKey = i + '_' + j;
        // if true add CSS class 'box on', else 'box off'
        boxClass = this.props.grid[i][j] ? 'box on' : 'box off';

        rowsArray.push(
          <Box
            boxClass={boxClass}
            key={boxKey}
            row={i}
            col={j}
            boxClick={this.props.boxClick}
          />
        );
      }
    }

    return (
      <div id='grid' style={{width: gridWidth}}>
        {rowsArray}
      </div>
    );
  }
}

export default Grid;
