import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import actions from './actions/actions';
import reducer from './reducers/reducer';
import config from './config';

const store = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = createRoot(rootElement);

store.subscribe(() => {
  root.render(
    <Provider store={store}><App /></Provider>
  );
});

store.dispatch(actions.updateRhythmAndReactKeys(config.DEFAULT_RHYTHM, config.DEFAULT_REACT_KEYS));
