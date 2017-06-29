beforeEach(() => jest.resetModules());

describe('index', () => {
  let mockNoOp;
  beforeEach(() => {
    mockNoOp = () => {};
  });

  test('constructs the store with the reducer', () => {
    const mockCreateStore = jest.fn().mockReturnValue({
      dispatch: mockNoOp,
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

  test('fetches analysis for default rhythm', () => {
    const mockDispatch = jest.fn();
    jest.mock('redux', () => ({
      createStore: () => ({ dispatch: mockDispatch }),
      applyMiddleware: mockNoOp,
    }));

    jest.mock('../src/actions/actions').default;
    const actions = require('../src/actions/actions').default;

    const initialAction = { type: 'TYPE', data: 'data' };
    actions.fetchRhythmAnalysis.mockReturnValue(initialAction);


    require('../src/index');


    expect(actions.fetchRhythmAnalysis.mock.calls.length).toEqual(1);
    expect(actions.fetchRhythmAnalysis.mock.calls[0][0]).toBe('x--x--x---x-x---');
    expect(mockDispatch.mock.calls[0][0]).toEqual(initialAction);
  });
});
