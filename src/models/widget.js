import widgetConstants from '../constants/widgetConstants';

const { RING_ROTATION_OFFSET_TO_START_AT_TOP } = widgetConstants;

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

export default {
  calculateRotationForCell,
  calculateRotationForInsertZone,
};
