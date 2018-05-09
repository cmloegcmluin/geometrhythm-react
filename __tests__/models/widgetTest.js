import { CELL_DIAMETER, WIDGET_DIAMETER } from '../../src/constants';

beforeEach(() => jest.resetModules());

describe('widget', () => {
  const RING_ROTATION_OFFSET_TO_START_AT_TOP = Math.PI / 4;
  const RADIANS_PER_CIRCLE = 2 * Math.PI;
  const SUBDIVIDE_BY_FOUR = 1 / 4;
  const SUBDIVIDE_BY_FIVE = 1 / 5;

  describe('calculate rotation for cell', () => {
    const widget = require('../../src/models/widget').default;

    test('subdivisions of 4', () => {
      expect(widget.calculateRotationForCell(0, 'x---')).toBe((0 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FOUR) + RING_ROTATION_OFFSET_TO_START_AT_TOP);
      expect(widget.calculateRotationForCell(1, 'x---')).toBe((1 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FOUR) + RING_ROTATION_OFFSET_TO_START_AT_TOP);
      expect(widget.calculateRotationForCell(2, 'x---')).toBe((2 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FOUR) + RING_ROTATION_OFFSET_TO_START_AT_TOP);
      expect(widget.calculateRotationForCell(3, 'x---')).toBe((3 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FOUR) + RING_ROTATION_OFFSET_TO_START_AT_TOP);
    });

    test('subdivisions of 5', () => {
      expect(widget.calculateRotationForCell(0, 'x--x-')).toBe((0 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FIVE) + RING_ROTATION_OFFSET_TO_START_AT_TOP);
      expect(widget.calculateRotationForCell(1, 'x--x-')).toBe((1 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FIVE) + RING_ROTATION_OFFSET_TO_START_AT_TOP);
      expect(widget.calculateRotationForCell(2, 'x--x-')).toBe((2 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FIVE) + RING_ROTATION_OFFSET_TO_START_AT_TOP);
      expect(widget.calculateRotationForCell(3, 'x--x-')).toBe((3 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FIVE) + RING_ROTATION_OFFSET_TO_START_AT_TOP);
      expect(widget.calculateRotationForCell(4, 'x--x-')).toBe((4 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FIVE) + RING_ROTATION_OFFSET_TO_START_AT_TOP);
    });
  });

  describe('calculate rotation for insert zone', () => {
    const widget = require('../../src/models/widget').default;

    test('subdivisions of 4', () => {
      const OFFSET_FROM_CELL_BY_HALF = Math.PI * SUBDIVIDE_BY_FOUR;
      expect(widget.calculateRotationForInsertZone(0, 'x---')).toBe((0 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FOUR) + RING_ROTATION_OFFSET_TO_START_AT_TOP + OFFSET_FROM_CELL_BY_HALF);
      expect(widget.calculateRotationForInsertZone(1, 'x---')).toBe((1 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FOUR) + RING_ROTATION_OFFSET_TO_START_AT_TOP + OFFSET_FROM_CELL_BY_HALF);
      expect(widget.calculateRotationForInsertZone(2, 'x---')).toBe((2 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FOUR) + RING_ROTATION_OFFSET_TO_START_AT_TOP + OFFSET_FROM_CELL_BY_HALF);
      expect(widget.calculateRotationForInsertZone(3, 'x---')).toBe((3 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FOUR) + RING_ROTATION_OFFSET_TO_START_AT_TOP + OFFSET_FROM_CELL_BY_HALF);
    });

    test('subdivisions of 5', () => {
      const OFFSET_FROM_CELL_BY_HALF = Math.PI * SUBDIVIDE_BY_FIVE;
      expect(widget.calculateRotationForInsertZone(0, 'x--x-')).toBe((0 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FIVE) + RING_ROTATION_OFFSET_TO_START_AT_TOP + OFFSET_FROM_CELL_BY_HALF);
      expect(widget.calculateRotationForInsertZone(1, 'x--x-')).toBe((1 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FIVE) + RING_ROTATION_OFFSET_TO_START_AT_TOP + OFFSET_FROM_CELL_BY_HALF);
      expect(widget.calculateRotationForInsertZone(2, 'x--x-')).toBe((2 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FIVE) + RING_ROTATION_OFFSET_TO_START_AT_TOP + OFFSET_FROM_CELL_BY_HALF);
      expect(widget.calculateRotationForInsertZone(3, 'x--x-')).toBe((3 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FIVE) + RING_ROTATION_OFFSET_TO_START_AT_TOP + OFFSET_FROM_CELL_BY_HALF);
      expect(widget.calculateRotationForInsertZone(4, 'x--x-')).toBe((4 * RADIANS_PER_CIRCLE * SUBDIVIDE_BY_FIVE) + RING_ROTATION_OFFSET_TO_START_AT_TOP + OFFSET_FROM_CELL_BY_HALF);
    });
  });

  describe('calculate scale for insert zone', () => {
    const widget = require('../../src/models/widget').default;

    test('rhythm of length 4', () => {
      const angle = (2 * Math.PI) / 4;
      const expectedScale = (2 * (WIDGET_DIAMETER / 2) * Math.sin(angle / 2)) - CELL_DIAMETER;
      expect(widget.calculateScaleForInsertZone('x---')).toBe(expectedScale);
    });

    test('rhythm of length 5', () => {
      const angle = (2 * Math.PI) / 5;
      const expectedScale = (2 * (WIDGET_DIAMETER / 2) * Math.sin(angle / 2)) - CELL_DIAMETER;
      expect(widget.calculateScaleForInsertZone('x--x-')).toBe(expectedScale);
    });
  });

  describe('flip cell', () => {
    test('modifies rhythm and dispatches action', () => {
      const updateRhythmAction = {};
      const mockUpdateRhythm = jest.fn().mockReturnValue(updateRhythmAction);
      jest.mock('../../src/actions/actions', () => ({
        updateRhythm: mockUpdateRhythm,
      }));

      const mockDispatch = jest.fn();
      const rhythm = 'x---x---';
      const index = 4;

      const widget = require('../../src/models/widget').default;
      widget.flipCell(mockDispatch, rhythm, index);

      const expectedModifiedRhythm = 'x-------';

      expect(mockUpdateRhythm).toHaveBeenCalledWith(expectedModifiedRhythm);
      expect(mockDispatch).toHaveBeenCalledWith(updateRhythmAction);
    });
  });
});
