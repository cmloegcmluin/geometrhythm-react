beforeEach(() => jest.resetModules());

describe('actions', () => {
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
