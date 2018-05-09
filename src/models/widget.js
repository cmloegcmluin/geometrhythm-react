import actions from '../actions/actions';
import { CELL_DIAMETER, WIDGET_DIAMETER } from '../constants';

const RING_ROTATION_OFFSET_TO_START_AT_TOP = Math.PI / 4;
const RADIANS_PER_CIRCLE = 2 * Math.PI;

const calculateRotationForCell = (index, rhythm) => {
  const rotation = ((RADIANS_PER_CIRCLE * index) / rhythm.length)
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

const calculateScaleForInsertZone = (rhythm) => {
  const CELL_RADIUS = CELL_DIAMETER / 2;
  const WIDGET_RADIUS = WIDGET_DIAMETER / 2;
  const ANGLE = RADIANS_PER_CIRCLE / rhythm.length;

  return (2 * WIDGET_RADIUS * Math.sin(ANGLE / 2)) - (2 * CELL_RADIUS);
};

const flipCell = (dispatch, rhythm, index) => {
  const modifiedRhythm = flipCellAtIndex(rhythm, index);

  dispatch(actions.updateRhythm(modifiedRhythm));
};

export default {
  calculateRotationForCell,
  calculateRotationForInsertZone,
  calculateScaleForInsertZone,
  flipCell,
};

// private

const flipCellAtIndex = (rhythm, index) => {
  const splitRhythm = rhythm.split('');
  splitRhythm[index] = splitRhythm[index] === 'x' ? '-' : 'x';
  return splitRhythm.join('');
};
