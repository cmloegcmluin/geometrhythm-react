import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import AppComponent from './components/AppComponent';
import actions from './actions/actions';

const store = createStore();
const root = document.createElement('div');
document.body.appendChild(root);
render(<AppComponent />, root);

store.dispatch(actions.initialFetch());
