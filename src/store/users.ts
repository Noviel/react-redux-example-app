import { createSelector } from 'reselect';


import * as actions from './action-constants';

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

setFilter('all');

*/

export const usersSelector = (state: any) => state.users.list;
export const filterSelector = (state: any) => state.filter;

// const isUserChecked = (id: string) => (state: any) => {

// }

export const visibleUsers = createSelector(
  usersSelector,
  filterSelector,
  (users, filter) => {
    if (filter === 'all') {
      return users;
    }

    return Object.keys(users).reduce((acc: any, curr) => {
      if (filter === 'sent' && users[curr].status) {
        acc[curr] = users[curr];
      } else if (filter === 'unsent' && !users[curr].status) {
        acc[curr] = users[curr];
      }
    }, {});
  }
);

const initialState = {
  list: [],
  lastAction: 'init',
};

export const reducer = (state: any = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_USERS:
      console.log('fetching...');
      return { ...state, lastAction: 'fetching' };
    case actions.FETCH_USERS_FAILED:
      console.log('fetching failed...');
      return { ...state, lastAction: 'fetching failed' };
    case actions.FETCH_USERS_SUCCESS:
      console.log('fetching success...');
      return {
        ...state,
        list: payload.users,
        lastAction: 'fetching success',
      };
    case actions.SEND:
      return state;
    case actions.TOGGLE_SELECTED:
      console.log('toggling in user', payload);
      return state;
    default:
      return state;
  }
};
