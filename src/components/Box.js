import React from 'react';

const Box = ({boxClass, id, row, col, boxSize, boxClick}) => {
  return (
    <div
      className={boxClass}
      id={id}
      style={{height: boxSize + 'px', width: boxSize + 'px'}}
      onClick={() => boxClick(row, col)}
    />
  );
}

export default Box;
