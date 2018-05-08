import React from 'react';
import widget from '../models/widget';
import { WIDGET_DIAMETER } from '../constants';

const getStyle = (rhythm, index) => {
  const rotation = widget.calculateRotationForInsertZone(index, rhythm);
  const scale = widget.calculateScaleForInsertZone(rhythm);

  return {
    transform: `rotate(${rotation}rad)`,
    transformOrigin: `${WIDGET_DIAMETER / 2}px ${WIDGET_DIAMETER / 2}px`,
    position: 'absolute',
    width: `${scale}px`,
    height: `${scale}px`,
    cursor: 'pointer',
    transition: 'transform 1s',
  };
};

export default ({ rhythm, index, insertCell, reactKeys }) => {
  const onClick = () => insertCell(rhythm, index, reactKeys);

  const style = getStyle(rhythm, index);

  return (
    <div {...{ onClick, style }} />
  );
};
