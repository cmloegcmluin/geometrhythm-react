beforeEach(() => jest.resetModules());

describe('actions', () => {
  test('update rhythm and react keys', () => {
    const nock = require('nock');

    const rhythm = 'xxx-xxx-x';
    const reactKeys = [1, 3, 4, 9, 0, 2, 7, 8];

    const analysis = { rhythmLength: 9 };
    nock('http://localhost:3000')
      .get(`/v1/rhythms/${rhythm}`)
      .reply(200, JSON.stringify(analysis));

    const mockDispatch = jest.fn();

    const updateRhythmAndReactKeys = require('../../src/actions/actions').default.updateRhythmAndReactKeys;
    const { UPDATE_ANALYSIS, UPDATE_RHYTHM_AND_REACT_KEYS } = require('../../src/actions/actions').types;

    return updateRhythmAndReactKeys(rhythm, reactKeys)(mockDispatch)
      .then(() => {
        expect(mockDispatch.mock.calls.length).toEqual(2);

        expect(mockDispatch.mock.calls[0][0]).toEqual({
          type: UPDATE_RHYTHM_AND_REACT_KEYS,
          data: {
            rhythm,
            reactKeys,
          },
        });

        expect(mockDispatch.mock.calls[1][0]).toEqual({
          type: UPDATE_ANALYSIS,
          data: analysis,
        });
      });
  });

  test('update rhythm', () => {
    const nock = require('nock');

    const rhythm = 'xxx-xxx-x';

    const analysis = { rhythmLength: 9 };
    nock('http://localhost:3000')
      .get(`/v1/rhythms/${rhythm}`)
      .reply(200, JSON.stringify(analysis));

    const mockDispatch = jest.fn();

    const updateRhythm = require('../../src/actions/actions').default.updateRhythm;
    const { UPDATE_ANALYSIS, UPDATE_RHYTHM } = require('../../src/actions/actions').types;

    return updateRhythm(rhythm)(mockDispatch)
      .then(() => {
        expect(mockDispatch.mock.calls.length).toEqual(2);

        expect(mockDispatch.mock.calls[0][0]).toEqual({
          type: UPDATE_RHYTHM,
          data: rhythm,
        });

        expect(mockDispatch.mock.calls[1][0]).toEqual({
          type: UPDATE_ANALYSIS,
          data: analysis,
        });
      });
  });
});
