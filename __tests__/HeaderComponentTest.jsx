const React = require('react');
const { shallow } = require('enzyme');

jest.mock('../src/fetchHelper');
const fetchHelper = require('../src/fetchHelper').default;
const HeaderComponent = require('../src/HeaderComponent').default;

beforeEach(() => {
  fetchHelper.fetch.mockReset();
});

describe('render', () => {
  test('renders a title', () => {
    const wrapper = shallow(<HeaderComponent />);

    expect(wrapper.find('[data-id="title"]').length).toEqual(1);
  });
});

describe('fetching data', () => {
  test('calls api', () => {
    shallow(<HeaderComponent />);

    expect(fetchHelper.fetch.mock.calls.length).toBe(1);
  });
});
