import { CELL_ORIGIN_OFFSET, CELL_DIAMETER } from '../../src/constants';

const enzyme = require('enzyme');
const React = require('react');
const Cell = require('../../src/components/Cell').default;

describe('cell', () => {
  const rhythm = 'x----x--';
  const index = 4;

  test('renders a circular cell', () => {
    const wrapper = enzyme.shallow(<Cell {...{ rhythm, index }} />);

    expect(wrapper.find('svg').prop('stroke')).toEqual('black');
  });

  test('animates when position changes', () => {
    const wrapper = enzyme.shallow(<Cell {...{ rhythm, index }} />);

    expect(wrapper.find('div').prop('style')).toEqual(
      expect.objectContaining({
        transition: expect.stringContaining('transform'),
      }),
    );
  });

  test('shows a filled rhythm cell when it is an onset', () => {
    const isOnset = true;
    const wrapper = enzyme.shallow(<Cell {...{ isOnset, rhythm, index }} />);

    expect(wrapper.find('svg').prop('fill')).toBe('black');
  });

  test('shows an empty rhythm cell when it is not an onset', () => {
    const isOnset = false;
    const wrapper = enzyme.shallow(<Cell {...{ isOnset, rhythm, index }} />);

    expect(wrapper.find('svg').prop('fill')).toBe('white');
  });

  test('flips the rhythm cell upon click', () => {
    const flipCell = jest.fn();
    const wrapper = enzyme.shallow(<Cell {...{ flipCell, rhythm, index }} />);

    wrapper.simulate('click');
    expect(flipCell).toHaveBeenCalledWith(rhythm, index);
  });

  test('only the visible circle is clickable (and apparently so)', () => {
    const wrapper = enzyme.shallow(<Cell {...{ rhythm, index }} />);

    expect(wrapper.find('div').prop('style')).toEqual(
      expect.objectContaining({
        pointerEvents: 'none',
      }),
    );
    expect(wrapper.find('circle').prop('style')).toEqual(
      expect.objectContaining({
        pointerEvents: 'all',
        cursor: 'pointer',
      }),
    );
  });

  test('calculates the correct rotation from the index and rhythm length', () => {
    const wrapper = enzyme.shallow(<Cell {...{ rhythm, index }} />);

    const expectedRotation = (5 * Math.PI) / 4;
    expect(wrapper.find('div').prop('style')).toEqual(
      expect.objectContaining({
        transform: `rotate(${expectedRotation}rad)`,
      }),
    );
  });

  test('sets the correct scale', () => {
    const wrapper = enzyme.shallow(<Cell {...{ rhythm, index }} />);

    expect(wrapper.find('div').prop('style')).toEqual(
      expect.objectContaining({
        width: `${CELL_DIAMETER}px`,
        height: `${CELL_DIAMETER}px`,
      }),
    );
    expect(wrapper.find('svg').prop('viewBox')).toEqual(`0 0 ${CELL_DIAMETER} ${CELL_DIAMETER}`);
    expect(wrapper.find('circle').prop('r')).toEqual(CELL_DIAMETER / 2);
  });

  test('calculates the correct center of the rhythm ring and positions relative to it', () => {
    const wrapper = enzyme.shallow(<Cell {...{ rhythm, index }} />);

    expect(wrapper.find('div').prop('style')).toEqual(
      expect.objectContaining({
        transformOrigin: `${CELL_ORIGIN_OFFSET}px ${CELL_ORIGIN_OFFSET}px`,
        position: 'absolute',
      }),
    );
  });

  test('positions the center of the cell on the rhythm ring it rotates along', () => {
    const wrapper = enzyme.shallow(<Cell {...{ rhythm, index }} />);

    expect(wrapper.find('svg').prop('style')).toEqual(
      expect.objectContaining({
        position: 'absolute',
        right: `${CELL_DIAMETER / 2}px`,
        bottom: `${CELL_DIAMETER / 2}px`,
      }),
    );
    expect(wrapper.find('circle').prop('cx')).toEqual(CELL_DIAMETER / 2);
    expect(wrapper.find('circle').prop('cy')).toEqual(CELL_DIAMETER / 2);
  });
});
