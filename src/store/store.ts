import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { reducer as checked } from './checked';
import { reducer as filter } from './filter';
import { reducer as users } from './users';

/*
store.state = {
  users: {
    list: {
      1: { id: 1, name: '1' },
      2: { id: 2, name: '2' },
      3: { id: 3, name: '3' },
      4: { id: 4, name: '4' },
    },
    meta: {
      error: ''
    }
  },
  filter: 'all',
  checked: [1, 3, 4],
}
*/

export const store = createStore(
  combineReducers({ users, filter, checked }),
  applyMiddleware(logger, thunk)
);
