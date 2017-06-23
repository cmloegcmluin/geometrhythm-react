/* eslint-disable global-require */

describe('index', () => {
  test('fetches initial complexity data', () => {
    const mockDispatch = jest.fn();
    jest.mock('redux', () => ({
      createStore: () => ({ dispatch: mockDispatch }),
    }));


    require('../src/index');


    expect(mockDispatch.mock.calls[0][0]).toEqual({
      type: 'INITIAL_DATA_FETCH',
      data: 'x--x--x---x-x---',
    });
  });
});
