import { applyMiddleware, combineReducers, createStore } from 'redux';
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
let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // tslint:disable-next-line:no-var-requires
  const logger = require('redux-logger');
  middlewares = [...middlewares, logger];
}

export const store = createStore(
  combineReducers({ users, filter, checked }),
  applyMiddleware(...middlewares)
);
