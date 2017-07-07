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
    test('fails gracefully if rhythm is not present', () => {
      const store = configureStore()(ImmutableMap());
      const container = mount(<Provider {...{ store }}><Widget /></Provider>);

      const presenter = container.find(WidgetPresenter);
      expect(presenter.props().rhythm).toBe(undefined);
    });

    test('passes rhythm and keys to the presenter', () => {
      const initialState = ImmutableMap({
        rhythm: 'x----x--',
        reactKeys: [1, 3, 4, 9, 0, 2, 7, 8],
      });

      const store = configureStore()(initialState);
      const container = mount(<Provider {...{ store }}><Widget /></Provider>);

      const presenter = container.find(WidgetPresenter);
      expect(presenter.props().rhythm).toBe('x----x--');
      expect(presenter.props().reactKeys).toEqual([1, 3, 4, 9, 0, 2, 7, 8]);
    });
  });

  describe('mapDispatchToProps()', () => {
    test('returns a click handler for cells', () => {
      nock('http://localhost:3000')
        .get(/.*/g)
        .reply(200, {});

      const initialState = ImmutableMap({
        rhythm: 'x----x--',
        reactKeys: [1, 3, 4, 9, 0, 2, 7, 8],
      });

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

      const initialState = ImmutableMap({
        rhythm: 'x----x--',
        reactKeys: [1, 3, 4, 9, 0, 2, 7, 8],
      });

      const store = configureStore([thunk])(initialState);
      const container = mount(<Provider {...{ store }}><Widget /></Provider>);

      const presenter = container.find(WidgetPresenter);
      const insertZone = presenter.find(InsertZone).at(5);


      insertZone.simulate('click');


      expect(store.getActions()[0]).toEqual({
        type: types.UPDATE_RHYTHM_AND_REACT_KEYS,
        data: {
          rhythm: 'x----x---',
          reactKeys: [1, 3, 4, 9, 0, 2, 10, 7, 8],
        },
      });
    });
  });
});
