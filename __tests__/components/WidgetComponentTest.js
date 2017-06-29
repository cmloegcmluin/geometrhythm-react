beforeEach(() => jest.resetModules());

const React = require('react');
const { shallow } = require('enzyme');
const WidgetComponent = require('../../src/components/WidgetComponent').default;

describe('render', () => {
  test('renders a message', () => {
    const wrapper = shallow(<WidgetComponent />);

    expect(wrapper.find('[data-id="widget-message"]').length).toEqual(1);
  });
});
