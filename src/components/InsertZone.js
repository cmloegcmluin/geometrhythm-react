import React from 'react';
import widgetConstants from '../constants/widgetConstants';

const { RING_ROTATION_OFFSET_TO_START_AT_TOP } = widgetConstants;

const getStyle = (rhythm, index) => {
  const rotation = ((2 * Math.PI * index) / rhythm.length)
                 + RING_ROTATION_OFFSET_TO_START_AT_TOP
                 + (Math.PI / rhythm.length)
                 ;

  return {
    transform: `rotate(${rotation}rad)`,
    transformOrigin: '200px 200px',
    position: 'absolute',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  };
};

export default ({ rhythm, index, insertCell }) => {
  const onClick = () => insertCell();

  const style = getStyle(rhythm, index);

  return (
    <div {...{ onClick, style }} />
  );
};
