import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { CheckedState, reducer as checked } from './checked';
import { FilterState, reducer as filter } from './filter';
import { IUsersState, reducer as users } from './users';

export interface IAppState {
  users: IUsersState;
  filter: FilterState;
  checked: CheckedState;
}

/*
store.state = {
  users: {
    list: [1, 2, 3, 4],
    byId: {
      1: { id: 1, name: '1' },
      2: { id: 2, name: '2' },
      3: { id: 3, name: '3' },
      4: { id: 4, name: '4' },
    },
  },
  filter: 'all',
  checked: [1, 3, 4],
  error: {
    some: 'data'
  }
}
*/
let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // tslint:disable-next-line:no-var-requires
  const logger = require('redux-logger').default;
  middlewares = [...middlewares, logger];
}

export const store = createStore(
  combineReducers({ users, filter, checked }),
  applyMiddleware(...middlewares)
);
