const enzyme = require('enzyme');
const React = require('react');
const InsertZone = require('../../src/components/InsertZone').default;

describe('insert zone', () => {
  const rhythm = 'x----x--';
  const index = 4;

  describe('style', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = enzyme.mount(<InsertZone {...{ rhythm, index }} />);
    });

    test('calculates the correct rotation from the index and rhythm length', () => {
      const expectedRotation = ((5 * Math.PI) / 4) + (Math.PI / 8);
      expect(wrapper.find('div').prop('style')).toEqual(
        expect.objectContaining({
          transform: `rotate(${expectedRotation}rad)`,
        }),
      );
    });

    test('calculates the correct center of the rhythm ring', () => {
      expect(wrapper.find('div').prop('style')).toEqual(
        expect.objectContaining({
          transformOrigin: '200px 200px',
        }),
      );
    });
  });
});
