const shallow = require('enzyme').shallow;
const React = require('react');
const Cell = require('../../src/components/Cell').default;

describe('cell', () => {
  test('shows the rhythm cell as an \'x\' when it is an onset', () => {
    const isOnset = true;
    const wrapper = shallow(<Cell {...{ isOnset }} />);

    expect(wrapper.text()).toBe('x');
  });

  test('shows the rhythm cell as a \'-\' when it is not an onset', () => {
    const isOnset = false;
    const wrapper = shallow(<Cell {...{ isOnset }} />);

    expect(wrapper.text()).toBe('-');
  });

  test('flips the rhythm cell upon click', () => {
    const flipCell = jest.fn();
    const rhythm = 'x----x--';
    const index = 4;
    const wrapper = shallow(<Cell {...{ flipCell, rhythm, index }} />);

    wrapper.simulate('click');
    expect(flipCell).toHaveBeenCalledWith(rhythm, index);
  });
});
