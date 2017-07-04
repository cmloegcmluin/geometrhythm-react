const shallow = require('enzyme').shallow;
const React = require('react');
const Cell = require('../../src/components/Cell').default;

describe('cell', () => {
  test('shows the rhythm cell as text', () => {
    const rhythmCell = 'x';
    const wrapper = shallow(<Cell {...{ rhythmCell }} />);

    expect(wrapper.text()).toBe('x');
  });

  test('flips the rhythm cell upon click', () => {
    const flipRhythmCell = jest.fn();
    const rhythm = 'x----x--';
    const index = 4;
    const wrapper = shallow(<Cell {...{ flipRhythmCell, rhythm, index }} />);

    wrapper.simulate('click');
    expect(flipRhythmCell).toHaveBeenCalledWith(rhythm, index);
  });
});
