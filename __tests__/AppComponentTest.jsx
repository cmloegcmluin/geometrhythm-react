const React = require('react');
const { shallow } = require('enzyme');
const AppComponent = require('../src/AppComponent').default;

test('renders a header, widget, and analysis', () => {
  const app = shallow(<AppComponent />);

  expect(app.find('[data-id="header"]').length).toBe(1);
  expect(app.find('[data-id="widget"]').length).toBe(1);
  expect(app.find('[data-id="analysis"]').length).toBe(1);
});
