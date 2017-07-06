import React from 'react';

const RING_ROTATION_OFFSET_TO_START_AT_TOP = Math.PI / 4;

const getStyle = (rhythm, index) => {
  const rotation = ((2 * Math.PI * index) / rhythm.length) + RING_ROTATION_OFFSET_TO_START_AT_TOP;

  return {
    transform: `rotate(${rotation}rad)`,
    transformOrigin: '200px 200px',
    position: 'absolute',
  };
};

export default ({ rhythm, isOnset, index, flipCell }) => {
  const onClick = () => flipCell(rhythm, index);

  const style = getStyle(rhythm, index);

  return (
    <div {...{ onClick, style }} >
      { isOnset ? 'x' : '-' }
    </div>
  );
};
