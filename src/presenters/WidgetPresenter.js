import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../components/Cell';

function mapRhythmToCells(rhythm, flipRhythmCell) {
  let rhythmicCells;

  if (rhythm && rhythm.length) {
    rhythmicCells = rhythm.split('').map((rhythmCell, key) => {
      const cellProps = {
        index: key,
        flipRhythmCell,
        key,
        rhythm,
        rhythmCell,
      };

      return (
        <Cell {...cellProps} />
      );
    });
  }

  return rhythmicCells;
}

const WidgetPresenter = ({ rhythm, flipRhythmCell }) => {
  const rhythmicCells = mapRhythmToCells(rhythm, flipRhythmCell);

  return (
    <ol>
      { rhythmicCells }
    </ol>
  );
};

WidgetPresenter.PropTypes = {
  rhythm: PropTypes.string,
};

export default WidgetPresenter;
