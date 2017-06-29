beforeEach(() => jest.resetModules());

describe('actions', () => {
  test('fetch rhythm analysis', () => {
    const mockDispatch = jest.fn();
    const analysis = { tallness: 4 };
    jest.mock('isomorphic-fetch');
    const fetch = require('isomorphic-fetch');
    fetch.mockReturnValue(Promise.resolve(analysis));
    const rhythm = 'xxx-xxx-x';

    const actions = require('../../src/actions/actions').default;
    const { UPDATE_ANALYSIS } = require('../../src/actions/actions').types;


    return actions.fetchRhythmAnalysis(rhythm)(mockDispatch)
      .then(() => {
        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(`http://localhost:3000/v1/rhythms/${rhythm}`);

        expect(mockDispatch.mock.calls.length).toEqual(1);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
          type: UPDATE_ANALYSIS,
          data: analysis,
        });
      });
  });
});
