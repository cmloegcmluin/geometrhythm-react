beforeEach(() => jest.resetModules());

describe('index', () => {
  let noop;
  beforeEach(() => {
    noop = () => {};
  });

  test('constructs the store with the reducer', () => {
    const mockCreateStore = jest.fn().mockReturnValue({
      dispatch: noop,
    });
    const mockApplyMiddlewareReturn = 'applyMiddlewareReturn';
    const mockApplyMiddleware = jest.fn().mockReturnValue(mockApplyMiddlewareReturn);
    jest.mock('redux', () => ({
      createStore: mockCreateStore,
      applyMiddleware: mockApplyMiddleware,
    }));

    const reducer = require('../src/reducers/reducer').default;
    const thunk = require('redux-thunk').default;


    require('../src/index');


    expect(mockCreateStore.mock.calls[0][0]).toEqual(reducer);
    expect(mockCreateStore.mock.calls[0][1]).toEqual(mockApplyMiddlewareReturn);
    expect(mockApplyMiddleware.mock.calls[0][0]).toEqual(thunk);
  });

  test('fetches initial complexity data', () => {
    const mockDispatch = jest.fn();
    jest.mock('redux', () => ({
      createStore: () => ({ dispatch: mockDispatch }),
      applyMiddleware: noop,
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
