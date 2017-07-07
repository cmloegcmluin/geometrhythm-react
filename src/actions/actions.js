import fetch from 'isomorphic-fetch';
import config from '../config';

export const types = {
  UPDATE_ANALYSIS: 'UPDATE_ANALYSIS',
  UPDATE_RHYTHM: 'UPDATE_RHYTHM',
  UPDATE_RHYTHM_AND_REACT_KEYS: 'UPDATE_RHYTHM_AND_REACT_KEYS',
};

const fetchAnalysis = (dispatch, rhythm) => {
  return fetch(`${config.GEOMETRHYTHM_API_BASE_URL}/v1/rhythms/${rhythm}`, { method: 'GET', headers: {} })
    .then((response) => {
      return response.json();
    })
    .then((parsedData) => {
      return dispatch({ type: types.UPDATE_ANALYSIS, data: parsedData });
    });
};

const updateRhythmAndReactKeys = (rhythm, reactKeys) => {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE_RHYTHM_AND_REACT_KEYS,
      data: {
        rhythm,
        reactKeys,
      },
    });

    return fetchAnalysis(dispatch, rhythm);
  };
};

const updateRhythm = (rhythm) => {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE_RHYTHM,
      data: rhythm,
    });

    return fetchAnalysis(dispatch, rhythm);
  };
};

export default {
  updateRhythm,
  updateRhythmAndReactKeys,
};
