beforeEach(() => jest.resetModules());

const { UPDATE_ANALYSIS, UPDATE_RHYTHM, UPDATE_RHYTHM_AND_REACT_KEYS } = require('../../src/actions/actions').types;
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

  test('update rhythm and react keys', () => {
    const currentState = ImmutableMap({ rhythm: 'x---x---', reactKeys: [1, 3, 4, 9, 0, 2, 7, 8] });
    const newRhythm = 'x----x---';
    const newReactKeys = [1, 3, 4, 9, 10, 0, 2, 7, 8];

    const nextState = reducer(
      currentState,
      {
        type: UPDATE_RHYTHM_AND_REACT_KEYS,
        data: {
          rhythm: newRhythm,
          reactKeys: newReactKeys,
        },
      },
    );

    const expectedState = ImmutableMap({ rhythm: newRhythm, reactKeys: newReactKeys });
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
