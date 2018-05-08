import actions from '../actions/actions';
import { CELL_DIAMETER, WIDGET_DIAMETER } from '../constants';

const RING_ROTATION_OFFSET_TO_START_AT_TOP = Math.PI / 4;
const FULL_CIRCUMFERENCE = 2 * Math.PI;

const calculateRotationForCell = (index, rhythm) => {
  const rotation = ((FULL_CIRCUMFERENCE * index) / rhythm.length)
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
  const widgetCircumference = Math.PI * WIDGET_DIAMETER;
  const lengthTakenByCells = rhythm.length * CELL_DIAMETER;
  return (widgetCircumference - lengthTakenByCells) / rhythm.length;
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
