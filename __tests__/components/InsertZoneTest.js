import { CELL_DIAMETER, WIDGET_DIAMETER } from '../../src/constants';

const enzyme = require('enzyme');
const React = require('react');
const InsertZone = require('../../src/components/InsertZone').default;

describe('insert zone', () => {
  const rhythm = 'x----x--';
  const index = 4;
  const reactKeys = [1, 3, 4, 9, 0, 2, 7, 8];

  test('inserts a new rhythm cell upon click', () => {
    const insertCell = jest.fn();
    const wrapper = enzyme.shallow(<InsertZone {...{ insertCell, rhythm, index, reactKeys }} />);

    wrapper.simulate('click');
    expect(insertCell).toHaveBeenCalledWith(rhythm, index, reactKeys);
  });

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

    test('calculates the correct scale from the rhythm length', () => {
      const expectedScale = ((Math.PI * WIDGET_DIAMETER) - (8 * CELL_DIAMETER)) / 8;
      expect(wrapper.find('div').prop('style')).toEqual(
        expect.objectContaining({
          width: `${expectedScale}px`,
          height: `${expectedScale}px`,
        }),
      );
    });

    test('calculates the correct center of the rhythm ring', () => {
      expect(wrapper.find('div').prop('style')).toEqual(
        expect.objectContaining({
          transformOrigin: `${WIDGET_DIAMETER / 2}px ${WIDGET_DIAMETER / 2}px`,
        }),
      );
    });
  });
});
