const React = require('react');
const { shallow } = require('enzyme');
const HeaderComponent = require('../../src/components/HeaderComponent').default;

describe('render', () => {
  test('renders a title', () => {
    const wrapper = shallow(<HeaderComponent />);

    expect(wrapper.find('[data-id="title"]').length).toEqual(1);
  });
});
