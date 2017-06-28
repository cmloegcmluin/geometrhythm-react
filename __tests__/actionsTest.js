describe('actions', () => {
  test('initial fetch', () => {
    const mockDispatch = jest.fn();
    const analysis = { tallness: 4 };
    jest.mock('../src/fetchHelper').default;
    const fetchHelper = require('../src/fetchHelper').default;
    fetchHelper.fetch.mockReturnValue(Promise.resolve(analysis));


    const actions = require('../src/actions').default;
    const { UPDATE_ANALYSIS } = require('../src/actions').types;


    return actions.initialFetch()(mockDispatch)
      .then(() => {
        expect(fetchHelper.fetch.mock.calls.length).toEqual(1);
        expect(mockDispatch.mock.calls.length).toEqual(1);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
          type: UPDATE_ANALYSIS,
          data: analysis,
        });
      });
  });
});
