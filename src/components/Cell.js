import React from 'react';
import widget from '../models/widget';

const getStyle = (rhythm, index) => {
  const rotation = widget.calculateRotationForCell(index, rhythm);

  return {
    transform: `rotate(${rotation}rad)`,
    transformOrigin: '200px 200px',
    position: 'absolute',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    transition: 'transform 1s',
  };
};

const getSvgProps = (isOnset) => {
  return {
    viewBox: '0 0 20 20',
    stroke: 'black',
    fill: isOnset ? 'black' : 'white',
  };
};

export default ({ rhythm, isOnset, index, flipCell }) => {
  const onClick = () => flipCell(rhythm, index);

  const style = getStyle(rhythm, index);

  const svgProps = getSvgProps(isOnset);

  return (
    <div {...{ onClick, style }} >
      <svg {...svgProps}>
        <circle {...{ cx: 10, cy: 10, r: 10 }} />
      </svg>
    </div>
  );
};
