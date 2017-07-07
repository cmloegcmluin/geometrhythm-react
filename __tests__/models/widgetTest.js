const widget = require('../../src/models/widget').default;

describe('widget', () => {
  describe('calculate rotation for cell', () => {
    test('subdivisions of 4', () => {
      expect(widget.calculateRotationForCell(0, 'x---')).toBe(((0 * 2 * Math.PI) / 4) + (Math.PI / 4));
      expect(widget.calculateRotationForCell(1, 'x---')).toBe(((1 * 2 * Math.PI) / 4) + (Math.PI / 4));
      expect(widget.calculateRotationForCell(2, 'x---')).toBe(((2 * 2 * Math.PI) / 4) + (Math.PI / 4));
      expect(widget.calculateRotationForCell(3, 'x---')).toBe(((3 * 2 * Math.PI) / 4) + (Math.PI / 4));
    });

    test('subdivisions of 5', () => {
      expect(widget.calculateRotationForCell(0, 'x--x-')).toBe(((0 * 2 * Math.PI) / 5) + (Math.PI / 4));
      expect(widget.calculateRotationForCell(1, 'x--x-')).toBe(((1 * 2 * Math.PI) / 5) + (Math.PI / 4));
      expect(widget.calculateRotationForCell(2, 'x--x-')).toBe(((2 * 2 * Math.PI) / 5) + (Math.PI / 4));
      expect(widget.calculateRotationForCell(3, 'x--x-')).toBe(((3 * 2 * Math.PI) / 5) + (Math.PI / 4));
      expect(widget.calculateRotationForCell(4, 'x--x-')).toBe(((4 * 2 * Math.PI) / 5) + (Math.PI / 4));
    });
  });

  describe('calculate rotation for insert zone', () => {
    test('subdivisions of 4', () => {
      expect(widget.calculateRotationForInsertZone(0, 'x---')).toBe(((0 * 2 * Math.PI) / 4) + (Math.PI / 4) + (Math.PI / 4));
      expect(widget.calculateRotationForInsertZone(1, 'x---')).toBe(((1 * 2 * Math.PI) / 4) + (Math.PI / 4) + (Math.PI / 4));
      expect(widget.calculateRotationForInsertZone(2, 'x---')).toBe(((2 * 2 * Math.PI) / 4) + (Math.PI / 4) + (Math.PI / 4));
      expect(widget.calculateRotationForInsertZone(3, 'x---')).toBe(((3 * 2 * Math.PI) / 4) + (Math.PI / 4) + (Math.PI / 4));
    });

    test('subdivisions of 5', () => {
      expect(widget.calculateRotationForInsertZone(0, 'x--x-')).toBe(((0 * 2 * Math.PI) / 5) + (Math.PI / 4) + (Math.PI / 5));
      expect(widget.calculateRotationForInsertZone(1, 'x--x-')).toBe(((1 * 2 * Math.PI) / 5) + (Math.PI / 4) + (Math.PI / 5));
      expect(widget.calculateRotationForInsertZone(2, 'x--x-')).toBe(((2 * 2 * Math.PI) / 5) + (Math.PI / 4) + (Math.PI / 5));
      expect(widget.calculateRotationForInsertZone(3, 'x--x-')).toBe(((3 * 2 * Math.PI) / 5) + (Math.PI / 4) + (Math.PI / 5));
      expect(widget.calculateRotationForInsertZone(4, 'x--x-')).toBe(((4 * 2 * Math.PI) / 5) + (Math.PI / 4) + (Math.PI / 5));
    });
  });
});
