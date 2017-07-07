beforeEach(() => jest.resetModules());

describe('index', () => {
  let mockNoOp;
  beforeEach(() => {
    mockNoOp = () => {};
  });

  test('constructs the store with the reducer', () => {
    const mockCreateStore = jest.fn().mockReturnValue({
      dispatch: mockNoOp,
      subscribe: mockNoOp,
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

  test('calls update rhythm action', () => {
    const mockDispatch = jest.fn();
    jest.mock('redux', () => ({
      createStore: () => ({
        dispatch: mockDispatch,
        subscribe: mockNoOp,
      }),
      applyMiddleware: mockNoOp,
    }));

    jest.mock('../src/actions/actions');
    const actions = require('../src/actions/actions').default;

    const initialAction = { type: 'TYPE', data: 'data' };
    actions.updateRhythm.mockReturnValue(initialAction);


    require('../src/index');


    expect(actions.updateRhythm.mock.calls.length).toEqual(1);
    expect(actions.updateRhythm.mock.calls[0][0]).toBe('x--x--x---x-x---');
    expect(actions.updateRhythm.mock.calls[0][1]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    expect(mockDispatch.mock.calls[0][0]).toEqual(initialAction);
  });
});
