beforeEach(() => jest.resetModules());

const React = require('react');
const { shallow } = require('enzyme');
const WidgetPresenter = require('../../src/presenters/WidgetPresenter').default;

describe('render', () => {
  test('renders a message', () => {
    const wrapper = shallow(<WidgetPresenter />);

    expect(wrapper.find('[data-id="widget-message"]').length).toEqual(1);
  });
});
