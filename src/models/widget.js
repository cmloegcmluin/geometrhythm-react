import actions from '../actions/actions';

const RING_ROTATION_OFFSET_TO_START_AT_TOP = Math.PI / 4;

const calculateRotationForCell = (index, rhythm) => {
  const rotation = ((2 * Math.PI * index) / rhythm.length)
                 + RING_ROTATION_OFFSET_TO_START_AT_TOP
                 ;

  return rotation;
};

const calculateRotationForInsertZone = (index, rhythm) => {
  const rotation = calculateRotationForCell(index, rhythm)
                 + (Math.PI / rhythm.length)
                 ;

  return rotation;
};

const flipCell = (dispatch, rhythm, index) => {
  const modifiedRhythm = flipCellAtIndex(rhythm, index);

  dispatch(actions.updateRhythm(modifiedRhythm));
};

export default {
  calculateRotationForCell,
  calculateRotationForInsertZone,
  flipCell,
};

// private

const flipCellAtIndex = (rhythm, index) => {
  const splitRhythm = rhythm.split('');
  splitRhythm[index] = splitRhythm[index] === 'x' ? '-' : 'x';
  return splitRhythm.join('');
};
