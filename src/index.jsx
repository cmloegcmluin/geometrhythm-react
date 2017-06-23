import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import AppComponent from './AppComponent';

const store = createStore();
const root = document.createElement('div');
document.body.appendChild(root);
render(<AppComponent />, root);

store.dispatch({
  type: 'INITIAL_DATA_FETCH',
  data: 'x--x--x---x-x---',
});
