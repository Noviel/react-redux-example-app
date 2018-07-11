import React from 'react';
import { render } from 'react-dom';

import { App } from './components/App';

import { fetchUsers, setFilter } from './store/actions';
import { store } from './store/store';

(window as any)._ = {
  store,
  fetchUsers,
  setFilter
}

store.dispatch(fetchUsers(''));

// store.subscribe(() => {
//   console.log(store.getState());
// });

import './styles/global.css';

const root = document.getElementById('app');

render(<App store={store} />, root);
