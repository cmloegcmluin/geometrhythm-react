import React from 'react';
import widget from '../models/widget';
import { CELL_ORIGIN_OFFSET } from '../constants';

const getDivProps = ({ rhythm, index, insertCell, reactKeys }) => {
  const rotation = widget.calculateRotationForInsertZone(index, rhythm);
  const scale = widget.calculateScaleForInsertZone(rhythm);

  return {
    onClick: () => insertCell(rhythm, index, reactKeys),
    style: {
      transform: `rotate(${rotation}rad)`,
      transformOrigin: `${CELL_ORIGIN_OFFSET}px ${CELL_ORIGIN_OFFSET}px`,
      position: 'absolute',
      width: `${scale}px`,
      height: `${scale}px`,
      transition: 'transform 1s',
      pointerEvents: 'none',
    },
  };
};

const getSvgProps = (scale) => {
  return {
    viewBox: `0 0 ${scale} ${scale}`,
    style: {
      position: 'absolute',
      right: `${scale / 2}px`,
      bottom: `${scale / 2}px`,
    },
  };
};

const getCircleProps = (scale) => {
  return {
    cx: scale / 2,
    cy: scale / 2,
    r: scale / 2,
    fill: 'none',
    style: {
      pointerEvents: 'all',
      cursor: 'pointer',
    },
  };
};

export default ({ rhythm, index, insertCell, reactKeys }) => {
  const scale = widget.calculateScaleForInsertZone(rhythm);

  const divProps = getDivProps({ rhythm, index, insertCell, reactKeys });
  const svgProps = getSvgProps(scale);
  const circleProps = getCircleProps(scale);

  return (
    <div {...divProps} >
      <svg {...svgProps} >
        <circle {...circleProps} />
      </svg>
    </div>
  );
};
