import { createSelector } from 'reselect';

import * as actions from './action-constants';
import { filterSelector } from './filter';

import { arrayToObject, deleteKeys } from '../lib';

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

Filtered todo are derived from the state via selectors.

*/

const initialState = {
  list: [],
  byId: {},
  lastAction: 'init',
};

export const usersByIdSelector = (state: any) => state.users.byId;
export const usersListSelector = (state: any) => state.users.list;

export const visibleUsers = createSelector(
  usersByIdSelector,
  usersListSelector,
  filterSelector,
  (usersById, usersList, filter) => {
    if (filter === 'all') {
      return usersList.map((id: number) => usersById[id]);
    }

    return usersList.reduce((acc: any, curr: any) => {
      const user = usersById[curr];
      if (
        (filter === 'sent' && user.status) ||
        (filter === 'unsent' && !user.status)
      ) {
        acc.push(user);
      }
      return acc;
    }, []);
  }
);

export const reducer = (state: any = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_USERS:
      return { ...state, lastAction: 'fetching' };
    case actions.FETCH_USERS_FAILED:
      return { ...state, lastAction: 'fetching failed' };
    case actions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        byId: arrayToObject(payload.users),
        list: payload.users.map((u: any) => u.id),
        lastAction: 'fetching success',
      };

    case actions.SEND_SUCCESS:
      const id = payload.result.target;
      return {
        ...state,
        byId: { ...state.byId, [id]: { ...state.byId[id], status: true } },
      };

    case actions.DELETE_SUCCESS:
      const { ids } = payload;
      return {
        ...state,
        byId: deleteKeys(state.byId, ids),
        list: state.list.filter((e: any) => !ids.includes(e)),
      };

    case actions.CREATE_USER_SUCCESS:
      return {
        ...state,
        byId: { ...state.byId, [payload.result.id]: payload.result },
        list: state.list.concat(payload.result.id),
      };

    default:
      return state;
  }
};
