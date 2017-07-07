const mount = require('enzyme').mount;
const React = require('react');
const Provider = require('react-redux').Provider;
const configureStore = require('redux-mock-store').default;
const ImmutableMap = require('immutable').Map;
const thunk = require('redux-thunk').default;
const nock = require('nock');
const Widget = require('../../src/containers/Widget').default;
const WidgetPresenter = require('../../src/presenters/WidgetPresenter').default;
const Cell = require('../../src/components/Cell').default;
const InsertZone = require('../../src/components/InsertZone').default;
const types = require('../../src/actions/actions').types;

beforeEach(() => jest.resetModules());

describe('widget', () => {
  describe('mapStateToProps()', () => {
    test('fails gracefully if desired state key is not present', () => {
      const store = configureStore()(ImmutableMap());
      const container = mount(<Provider {...{ store }}><Widget /></Provider>);

      const presenter = container.find(WidgetPresenter);
      expect(presenter.props().rhythm).toBe(undefined);
    });

    test('returns updated state', () => {
      const initialState = ImmutableMap({ rhythm: 'x----x--' });

      const store = configureStore()(initialState);
      const container = mount(<Provider {...{ store }}><Widget /></Provider>);

      const presenter = container.find(WidgetPresenter);
      expect(presenter.props().rhythm).toBe('x----x--');
    });
  });

  describe('mapDispatchToProps()', () => {
    test('returns a click handler for cells', () => {
      nock('http://localhost:3000')
        .get(/.*/g)
        .reply(200, {});

      const initialState = ImmutableMap({ rhythm: 'x----x--' });

      const store = configureStore([thunk])(initialState);
      const container = mount(<Provider {...{ store }}><Widget /></Provider>);

      const presenter = container.find(WidgetPresenter);
      const cell = presenter.find(Cell).at(5);


      cell.simulate('click');


      expect(store.getActions()[0]).toEqual({
        type: types.UPDATE_RHYTHM,
        data: 'x-------',
      });
    });

    test('returns a click handler for insert zones', () => {
      nock('http://localhost:3000')
        .get(/.*/g)
        .reply(200, {});

      const initialState = ImmutableMap({ rhythm: 'x----x--' });

      const store = configureStore([thunk])(initialState);
      const container = mount(<Provider {...{ store }}><Widget /></Provider>);

      const presenter = container.find(WidgetPresenter);
      const cell = presenter.find(InsertZone).at(5);


      cell.simulate('click');


      expect(store.getActions()[0]).toEqual({
        type: types.UPDATE_RHYTHM,
        data: 'x----x---',
      });
    });
  });
});
