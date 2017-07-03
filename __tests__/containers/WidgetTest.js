const mount = require('enzyme').mount;
const React = require('react');
const Provider = require('react-redux').Provider;
const configureStore = require('redux-mock-store').default;
const Widget = require('../../src/containers/Widget').default;
const WidgetPresenter = require('../../src/presenters/WidgetPresenter').default;
const ImmutableMap = require('immutable').Map;

beforeEach(() => jest.resetModules());

describe('widget', () => {
  test('mapStateToProps() fails gracefully if desired state key is not present', () => {
    const store = configureStore()(ImmutableMap());
    const container = mount(<Provider {...{ store }}><Widget /></Provider>);

    const presenter = container.find(WidgetPresenter);
    expect(presenter.props().rhythm).toBe(undefined);
  });

  test('mapStateToProps() returns updated state', () => {
    const initialState = ImmutableMap({ rhythm: 'x----x--' });

    const store = configureStore()(initialState);
    const container = mount(<Provider {...{ store }}><Widget /></Provider>);

    const presenter = container.find(WidgetPresenter);
    expect(presenter.props().rhythm).toBe('x----x--');
  });
});
