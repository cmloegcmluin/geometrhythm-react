beforeEach(() => jest.resetModules());

const React = require('react');
const { shallow } = require('enzyme');
const AppComponent = require('../../src/components/AppComponent').default;
const HeaderComponent = require('../../src/components/HeaderComponent').default;
const WidgetComponent = require('../../src/components/WidgetComponent').default;

let app;
beforeEach(() => {
  app = shallow(<AppComponent />);
});

describe('render', () => {
  test('renders an analysis', () => {
    expect(app.find('[data-id="analysis"]').length).toBe(1);
  });

  test('renders a HeaderComponent', () => {
    expect(app.find(HeaderComponent).length).toBe(1);
  });

  test('renders a WidgetComponent', () => {
    expect(app.find(WidgetComponent).length).toBe(1);
  });
});
