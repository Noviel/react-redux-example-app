import React from 'react';
import { render } from 'react-dom';

import { App } from './components/App/App';

import { fetchUsers, setFilter } from './store/actions';
import { store } from './store/store';

store.dispatch(fetchUsers(''));
import './styles/global.css';

const root = document.getElementById('app');

render(<App store={store} />, root);
