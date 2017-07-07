import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../components/Cell';
import InsertZone from '../components/InsertZone';

function mapRhythmToCellsAndInsertZones(rhythm, flipCell, insertCell) {
  const cellsAndInsertZones = [];

  if (rhythm && rhythm.length) {
    rhythm.split('').forEach((cell, key) => {
      const cellProps = {
        index: key,
        flipCell,
        key,
        rhythm,
        isOnset: cell === 'x',
      };

      cellsAndInsertZones.push(
        <Cell {...cellProps} />,
      );

      const insertZoneProps = {
        index: key,
        insertCell,
        key: `insert-zone-${key}`,
        rhythm,
      };

      cellsAndInsertZones.push(
        <InsertZone {...insertZoneProps} />,
      );
    });
  }

  return cellsAndInsertZones;
}

const WidgetPresenter = ({ rhythm, flipCell, insertCell }) => {
  const rhythmicCells = mapRhythmToCellsAndInsertZones(rhythm, flipCell, insertCell);

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
