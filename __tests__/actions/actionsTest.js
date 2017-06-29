beforeEach(() => jest.resetModules());

describe('actions', () => {
  test('initial fetch', () => {
    const mockDispatch = jest.fn();
    const analysis = { tallness: 4 };
    jest.mock('isomorphic-fetch');
    const fetch = require('isomorphic-fetch');
    fetch.mockReturnValue(Promise.resolve(analysis));


    const actions = require('../../src/actions/actions').default;
    const { UPDATE_ANALYSIS } = require('../../src/actions/actions').types;


    return actions.initialFetch()(mockDispatch)
      .then(() => {
        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000');

        expect(mockDispatch.mock.calls.length).toEqual(1);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
          type: UPDATE_ANALYSIS,
          data: analysis,
        });
      });
  });
});
