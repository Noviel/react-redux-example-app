import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { reducer as checked } from './checked';
import { reducer as filter } from './filter';
import { reducer as users } from './users';

export const store = createStore(
  combineReducers({ users, filter, checked }),
  applyMiddleware(logger, thunk)
);
