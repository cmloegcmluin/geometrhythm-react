import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppComponent from './components/AppComponent';
import actions from './actions/actions';
import reducer from './reducers/reducer';

const store = createStore(reducer, applyMiddleware(thunk));
const root = document.createElement('div');
document.body.appendChild(root);
render(<AppComponent />, root);

store.dispatch(actions.initialFetch());
