import fetch from 'isomorphic-fetch';
import config from '../config';

export const types = {
  UPDATE_ANALYSIS: 'UPDATE_ANALYSIS',
  UPDATE_RHYTHM: 'UPDATE_RHYTHM',
};

const fetchRhythmAnalysis = (rhythm) => {
  return (dispatch) => {
    return fetch(`${config.geometrhythmApiBaseUrl}/v1/rhythms/${rhythm}`, { method: 'GET', headers: {} })
      .then((data) => {
        return dispatch({ type: types.UPDATE_ANALYSIS, data });
      });
  };
};

export default {
  fetchRhythmAnalysis,
};
