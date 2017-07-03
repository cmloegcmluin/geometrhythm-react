beforeEach(() => jest.resetModules());

describe('actions', () => {
  test('fetch rhythm analysis', () => {
    const nock = require('nock');

    const rhythm = 'xxx-xxx-x';

    const analysis = { rhythmLength: 9 };
    nock('http://localhost:3000')
      .get(`/v1/rhythms/${rhythm}`)
      .reply(200, JSON.stringify(analysis));

    const mockDispatch = jest.fn();

    const actions = require('../../src/actions/actions').default;
    const { UPDATE_ANALYSIS } = require('../../src/actions/actions').types;

    return actions.fetchRhythmAnalysis(rhythm)(mockDispatch)
      .then(() => {
        expect(mockDispatch.mock.calls.length).toEqual(1);
        expect(mockDispatch.mock.calls[0][0]).toEqual({
          type: UPDATE_ANALYSIS,
          data: analysis,
        });
      });
  });
});