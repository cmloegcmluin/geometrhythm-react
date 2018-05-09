import React from 'react';
import widget from '../models/widget';
import { CELL_DIAMETER, CELL_ORIGIN_OFFSET } from '../constants';

const getDivProps = ({ rhythm, index, flipCell }) => {
  const rotation = widget.calculateRotationForCell(index, rhythm);

  return {
    onClick: () => flipCell(rhythm, index),
    style: {
      transform: `rotate(${rotation}rad)`,
      transformOrigin: `${CELL_ORIGIN_OFFSET}px ${CELL_ORIGIN_OFFSET}px`,
      position: 'absolute',
      width: `${CELL_DIAMETER}px`,
      height: `${CELL_DIAMETER}px`,
      pointerEvents: 'none',
      transition: 'transform 1s',
    },
  };
};

const getSvgProps = (isOnset) => {
  return {
    viewBox: `0 0 ${CELL_DIAMETER} ${CELL_DIAMETER}`,
    stroke: 'black',
    fill: isOnset ? 'black' : 'white',
    style: {
      position: 'absolute',
      right: `${CELL_DIAMETER / 2}px`,
      bottom: `${CELL_DIAMETER / 2}px`,
    },
  };
};

const getCircleSvgProps = () => {
  return {
    cx: CELL_DIAMETER / 2,
    cy: CELL_DIAMETER / 2,
    r: CELL_DIAMETER / 2,
    style: {
      pointerEvents: 'all',
      cursor: 'pointer',
    },
  };
};

export default ({ rhythm, isOnset, index, flipCell }) => {
  const divProps = getDivProps({ rhythm, index, flipCell });
  const svgProps = getSvgProps(isOnset);
  const circleSvgProps = getCircleSvgProps();

  return (
    <div {...divProps}>
      <svg {...svgProps}>
        <circle {...circleSvgProps} />
      </svg>
    </div>
  );
};
