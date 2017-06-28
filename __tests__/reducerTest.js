const { UPDATE_ANALYSIS, UPDATE_RHYTHM } = require('../src/actions').types;
const reducer = require('../src/reducer').default;
const Map = require('immutable').Map;

describe('reducer', () => {
  test('update rhythm', () => {
    const currentState = Map({ rhythm: 'x---x----x----x-' });
    const newRhythm = 'x--x--x--x--x---';

    const nextState = reducer(currentState, { type: UPDATE_RHYTHM, data: newRhythm });

    const expectedState = Map({ rhythm: newRhythm });
    expect(nextState).toEqual(expectedState);
  });

  test('update analysis data', () => {
    const currentState = Map({ analysis: { tallness: 1 } });
    const newAnalysis = { tallness: 5 };

    const nextState = reducer(currentState, { type: UPDATE_ANALYSIS, data: newAnalysis });

    const expectedState = Map({ analysis: newAnalysis });
    expect(nextState).toEqual(expectedState);
  });
});
