beforeEach(() => jest.resetModules());

const { UPDATE_ANALYSIS, UPDATE_RHYTHM } = require('../../src/actions/actions').types;
const reducer = require('../../src/reducers/reducer').default;
const ImmutableMap = require('immutable').Map;

describe('reducer', () => {
  test('update rhythm', () => {
    const currentState = ImmutableMap({ rhythm: 'x---x----x----x-' });
    const newRhythm = 'x--x--x--x--x---';

    const nextState = reducer(currentState, { type: UPDATE_RHYTHM, data: newRhythm });

    const expectedState = ImmutableMap({ rhythm: newRhythm });
    expect(nextState).toEqual(expectedState);
  });

  test('update analysis data', () => {
    const currentState = ImmutableMap({ analysis: { tallness: 1 } });
    const newAnalysis = { tallness: 5 };

    const nextState = reducer(currentState, { type: UPDATE_ANALYSIS, data: newAnalysis });

    const expectedState = ImmutableMap({ analysis: newAnalysis });
    expect(nextState).toEqual(expectedState);
  });
});
