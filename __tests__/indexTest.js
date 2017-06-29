beforeEach(() => jest.resetModules());

describe('index', () => {
  test('constructs the store with the reducer', () => {
    const mockCreateStore = jest.fn().mockReturnValue({ dispatch: () => {}});
    jest.mock('redux', () => ({
      createStore: mockCreateStore,
    }));
    const redux = require('redux');
    const reducer = require('../src/reducers/reducer').default;


    require('../src/index');


    expect(mockCreateStore.mock.calls[0][0]).toEqual(reducer)
  });

  test('fetches initial complexity data', () => {
    const mockDispatch = jest.fn();
    jest.mock('redux', () => ({
      createStore: () => ({ dispatch: mockDispatch }),
    }));

    jest.mock('../src/actions/actions').default;
    const actions = require('../src/actions/actions').default;

    const initialAction = { type: 'TYPE', data: 'data' };
    actions.initialFetch.mockReturnValue(initialAction);


    require('../src/index');


    expect(actions.initialFetch.mock.calls.length).toEqual(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual(initialAction);
  });
});
