import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import actions from './actions/actions';
import reducer from './reducers/reducer';

const DEFAULT_RHYTHM = 'x--x--x---x-x---';

const store = createStore(reducer, applyMiddleware(thunk));
const root = document.createElement('div');
document.body.appendChild(root);
store.subscribe(() => {
  render(
    <Provider store={store}><App /></Provider>,
    root,
  );
});


store.dispatch(actions.fetchRhythmAnalysis(DEFAULT_RHYTHM));
