import React from 'react';
import widget from '../models/widget';

const getStyle = (rhythm, index) => {
  const rotation = widget.calculateRotationForInsertZone(index, rhythm);

  return {
    transform: `rotate(${rotation}rad)`,
    transformOrigin: '200px 200px',
    position: 'absolute',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  };
};

export default ({ rhythm, index, insertCell, reactKeys }) => {
  const onClick = () => insertCell(rhythm, index, reactKeys);

  const style = getStyle(rhythm, index);

  return (
    <div {...{ onClick, style }} />
  );
};
