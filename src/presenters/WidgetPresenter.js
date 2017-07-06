import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../components/Cell';

function mapRhythmToCells(rhythm, flipCell) {
  let cells;

  if (rhythm && rhythm.length) {
    cells = rhythm.split('').map((cell, key) => {
      const cellProps = {
        index: key,
        flipCell,
        key,
        rhythm,
        isOnset: cell === 'x',
      };

      return (
        <Cell {...cellProps} />
      );
    });
  }

  return cells;
}

const WidgetPresenter = ({ rhythm, flipCell }) => {
  const rhythmicCells = mapRhythmToCells(rhythm, flipCell);

  const style = {
    marginLeft: '100px',
    marginTop: '100px',
  };

  return (
    <div {...{ style }}>
      { rhythmicCells }
    </div>
  );
};

WidgetPresenter.PropTypes = {
  rhythm: PropTypes.string,
};

export default WidgetPresenter;
