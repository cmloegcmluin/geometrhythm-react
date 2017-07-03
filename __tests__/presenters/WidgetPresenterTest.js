beforeEach(() => jest.resetModules());

const React = require('react');
const { shallow } = require('enzyme');
const WidgetPresenter = require('../../src/presenters/WidgetPresenter').default;

describe('render', () => {
  test('renders the rhythm x----x--', () => {
    const props = {
      rhythm: 'x----x--',
    };

    const wrapper = shallow(<WidgetPresenter {...props} />);

    const cells = wrapper.find('li');
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

    const wrapper = shallow(<WidgetPresenter {...props} />);

    const cells = wrapper.find('li');
    expect(cells.length).toBe(0);
  });
});
