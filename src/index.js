import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import actions from './actions/actions';
import reducer from './reducers/reducer';
import config from './config';

const store = createStore(reducer, applyMiddleware(thunk));
const root = document.createElement('div');
document.body.appendChild(root);
store.subscribe(() => {
  render(
    <Provider store={store}><App /></Provider>,
    root,
  );
});

store.dispatch(actions.updateRhythmAndReactKeys(config.DEFAULT_RHYTHM, config.DEFAULT_REACT_KEYS));
