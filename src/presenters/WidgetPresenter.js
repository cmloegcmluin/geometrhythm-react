import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../components/Cell';
import InsertZone from '../components/InsertZone';

function mapRhythmToCellsAndInsertZones(rhythm, flipCell, insertCell, reactKeys) {
  const cellsAndInsertZones = [];

  if (rhythm && rhythm.length) {
    rhythm.split('').forEach((cell, index) => {
      const cellProps = {
        index,
        flipCell,
        key: reactKeys[index],
        rhythm,
        isOnset: cell === 'x',
      };

      cellsAndInsertZones.push(
        <Cell {...cellProps} />,
      );

      const insertZoneProps = {
        index,
        insertCell,
        key: `insert-zone-${reactKeys[index]}`,
        reactKeys,
        rhythm,
      };

      cellsAndInsertZones.push(
        <InsertZone {...insertZoneProps} />,
      );
    });
  }

  return cellsAndInsertZones;
}

const WidgetPresenter = ({ rhythm, flipCell, insertCell, reactKeys }) => {
  const rhythmicCells = mapRhythmToCellsAndInsertZones(rhythm, flipCell, insertCell, reactKeys);

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

WidgetPresenter.propTypes = {
  rhythm: PropTypes.string,
};

export default WidgetPresenter;
