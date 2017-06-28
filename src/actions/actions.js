import fetchHelper from '../helpers/fetchHelper';

export const types = {
  UPDATE_ANALYSIS: 'UPDATE_ANALYSIS',
  UPDATE_RHYTHM: 'UPDATE_RHYTHM',
};

const { fetch } = fetchHelper;

const initialFetch = () => dispatch => fetch('http://my-api.com', { method: 'GET', headers: {} })
  .then(data => dispatch({ type: types.UPDATE_ANALYSIS, data }));

export default {
  initialFetch,
};
