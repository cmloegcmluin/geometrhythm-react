import fetch from 'isomorphic-fetch';
import config from '../config';

export const types = {
  UPDATE_ANALYSIS: 'UPDATE_ANALYSIS',
  UPDATE_RHYTHM: 'UPDATE_RHYTHM',
};

const initialFetch = () => dispatch => fetch(config.geometrhythmApiBaseUrl, { method: 'GET', headers: {} })
  .then(data => dispatch({ type: types.UPDATE_ANALYSIS, data }));

export default {
  initialFetch,
};
