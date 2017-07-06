const shallow = require('enzyme').shallow;
const mount = require('enzyme').mount;
const React = require('react');
const Cell = require('../../src/components/Cell').default;

describe('cell', () => {
  const rhythm = 'x----x--';
  const index = 4;

  test('shows the rhythm cell as an \'x\' when it is an onset', () => {
    const isOnset = true;
    const wrapper = shallow(<Cell {...{ isOnset, rhythm, index }} />);

    expect(wrapper.text()).toBe('x');
  });

  test('shows the rhythm cell as a \'-\' when it is not an onset', () => {
    const isOnset = false;
    const wrapper = shallow(<Cell {...{ isOnset, rhythm, index }} />);

    expect(wrapper.text()).toBe('-');
  });

  test('flips the rhythm cell upon click', () => {
    const flipCell = jest.fn();
    const wrapper = shallow(<Cell {...{ flipCell, rhythm, index }} />);

    wrapper.simulate('click');
    expect(flipCell).toHaveBeenCalledWith(rhythm, index);
  });

  describe('style', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Cell {...{ rhythm, index }} />);
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
          transformOrigin: '200px 200px',
        }),
      );
    });
  });
});
