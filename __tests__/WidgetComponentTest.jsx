const React = require('react');
const { shallow } = require('enzyme');

jest.mock('../src/fetchHelper');
const fetchHelper = require('../src/fetchHelper').default;
const WidgetComponent = require('../src/WidgetComponent').default;

test('renders', () => {
  const wrapper = shallow(<WidgetComponent />);

  expect(wrapper.find('[data-id="widget-message"]').length).toEqual(1);
});

test('calls fetch() with the rhythm\'s params as part of react lifecycle', () => {
  shallow(<WidgetComponent />);

  expect(fetchHelper.fetch.mock.calls[0][0]).toEqual('http://my-api.com');
  expect(fetchHelper.fetch.mock.calls[0][1]).toEqual({
    method: 'GET',
    params: {
      rhythm: 'x--x--x---x-x---',
    },
  });
});
