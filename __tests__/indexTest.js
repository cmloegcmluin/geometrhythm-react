describe('index', () => {
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
