import React from 'react';

const Box = ({boxClass, row, col, boxClick}) => {
  return (
    <div
      className={boxClass}
      onClick={() => boxClick(row, col)}
    />
  );
}

export default Box;
