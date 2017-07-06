beforeEach(() => jest.resetModules());

const React = require('react');
const { mount } = require('enzyme');
const WidgetPresenter = require('../../src/presenters/WidgetPresenter').default;
const Cell = require('../../src/components/Cell').default;

describe('render', () => {
  test('renders the correct number of cells for x----x--', () => {
    const props = {
      rhythm: 'x----x--',
    };

    const wrapper = mount(<WidgetPresenter {...props} />);

    const cells = wrapper.find(Cell);
    expect(cells.length).toBe(8);
  });

  test('renders even with an undefined rhythm', () => {
    const props = {};

    const wrapper = mount(<WidgetPresenter {...props} />);

    const cells = wrapper.find(Cell);
    expect(cells.length).toBe(0);
  });

  test('passes the right props on to each cell', () => {
    const widgetProps = {
      flipCell: jest.fn(),
      rhythm: 'x----x--',
    };

    const wrapper = mount(<WidgetPresenter {...widgetProps} />);

    const onsetCell = wrapper.find(Cell).at(0);
    expect(onsetCell.props().flipCell).toBe(widgetProps.flipCell);
    expect(onsetCell.props().rhythm).toBe(widgetProps.rhythm);
    expect(onsetCell.props().isOnset).toBe(true);

    const notOnsetCell = wrapper.find(Cell).at(1);
    expect(notOnsetCell.props().flipCell).toBe(widgetProps.flipCell);
    expect(notOnsetCell.props().rhythm).toBe(widgetProps.rhythm);
    expect(notOnsetCell.props().isOnset).toBe(false);
  });
});
