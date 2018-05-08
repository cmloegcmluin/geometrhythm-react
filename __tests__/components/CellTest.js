import { WIDGET_DIAMETER } from '../../src/constants';

const enzyme = require('enzyme');
const React = require('react');
const Cell = require('../../src/components/Cell').default;

describe('cell', () => {
  const rhythm = 'x----x--';
  const index = 4;

  test('shows a filled rhythm cell when it is an onset', () => {
    const isOnset = true;
    const wrapper = enzyme.shallow(<Cell {...{ isOnset, rhythm, index }} />);

    expect(wrapper.find('div svg').prop('fill')).toBe('black');
  });

  test('shows an empty rhythm cell when it is not an onset', () => {
    const isOnset = false;
    const wrapper = enzyme.shallow(<Cell {...{ isOnset, rhythm, index }} />);

    expect(wrapper.find('div svg').prop('fill')).toBe('white');
  });

  test('flips the rhythm cell upon click', () => {
    const flipCell = jest.fn();
    const wrapper = enzyme.shallow(<Cell {...{ flipCell, rhythm, index }} />);

    wrapper.simulate('click');
    expect(flipCell).toHaveBeenCalledWith(rhythm, index);
  });

  describe('style', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = enzyme.mount(<Cell {...{ rhythm, index }} />);
    });

    test('calculates the correct rotation from the index and rhythm length', () => {
      const expectedRotation = (5 * Math.PI) / 4;
      expect(wrapper.find('div').prop('style')).toEqual(
        expect.objectContaining({
          transform: `rotate(${expectedRotation}rad)`,
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
