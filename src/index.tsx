import React from 'react';
import { render } from 'react-dom';

import { App } from './components/App/App';
import { fetchUsers } from './store/actions';
import { store } from './store/store';

import './styles/global.css';

store.dispatch(fetchUsers(''));
const root = document.getElementById('app');

render(<App store={store} />, root);
