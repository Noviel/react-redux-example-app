import React from 'react';
import { render } from 'react-dom';

import { App } from './components/App';

import { fetchUsers } from './store/actions';
import { store } from './store/store';

(window as any).store = store;
(window as any).fetchUsers = fetchUsers;

store.dispatch(fetchUsers(''));

store.subscribe(() => {
  console.log(store.getState());
});

import './global.css';

const root = document.getElementById('app');

render(<App store={store} />, root);
