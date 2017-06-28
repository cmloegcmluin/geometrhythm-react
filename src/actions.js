import fetchHelper from './fetchHelper';

const { fetch } = fetchHelper;

const initialFetch = () => dispatch => fetch('http://my-api.com', { method: 'GET', headers: {} })
  .then(data => dispatch({ type: 'UPDATE_ANALYSIS', data }));

export default {
  initialFetch,
};
