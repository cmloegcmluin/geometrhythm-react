beforeEach(() => jest.resetModules());

const React = require('react');
const { mount } = require('enzyme');
const WidgetPresenter = require('../../src/presenters/WidgetPresenter').default;
const Cell = require('../../src/components/Cell').default;

describe('render', () => {
  test('renders the rhythm x----x--', () => {
    const props = {
      rhythm: 'x----x--',
    };

    const wrapper = mount(<WidgetPresenter {...props} />);

    const cells = wrapper.find(Cell);
    expect(cells.at(0).text()).toBe('x');
    expect(cells.at(1).text()).toBe('-');
    expect(cells.at(2).text()).toBe('-');
    expect(cells.at(3).text()).toBe('-');
    expect(cells.at(4).text()).toBe('-');
    expect(cells.at(5).text()).toBe('x');
    expect(cells.at(6).text()).toBe('-');
    expect(cells.at(7).text()).toBe('-');
  });

  test('renders even with an undefined rhythm', () => {
    const props = {};

    const wrapper = mount(<WidgetPresenter {...props} />);

    const cells = wrapper.find(Cell);
    expect(cells.length).toBe(0);
  });

  test('passes the right props on to each cell', () => {
    const props = {
      flipRhythmCell: jest.fn(),
      rhythm: 'x----x--',
    };

    const wrapper = mount(<WidgetPresenter {...props} />);

    const cell = wrapper.find(Cell).at(0);
    expect(cell.props().flipRhythmCell).toBe(props.flipRhythmCell);
    expect(cell.props().rhythm).toBe(props.rhythm);
  });
});
