import { createSelector } from 'reselect';

import * as actions from './action-constants';
import { filterSelector } from './filter';

import { arrayToObject, deleteKeys } from '../lib';

const initialState = {
  list: [],
  byId: {},
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
    case actions.FETCH_USERS_FAILED:
    case actions.CREATE_USER_FAILED:
    case actions.DELETE_USER_FAILED:
    case actions.SEND_FAILED:
    case actions.ERROR:
      console.warn(
        payload.error.action,
        'Probably remote endpoint is unavailable.'
      );
      return { ...state, error: payload.error };

    case actions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        byId: arrayToObject(payload.users),
        list: payload.users.map((u: any) => u.id),
      };

    case actions.CREATE_USER_SUCCESS:
      return {
        ...state,
        byId: { ...state.byId, [payload.result.id]: payload.result },
        list: state.list.concat(payload.result.id),
      };

    case actions.SEND_SUCCESS:
      const id = payload.result.target;
      return {
        ...state,
        byId: { ...state.byId, [id]: { ...state.byId[id], status: true } },
      };

    case actions.DELETE_USER_SUCCESS:
      const { ids } = payload;
      return {
        ...state,
        byId: deleteKeys(state.byId, ids),
        list: state.list.filter((e: any) => !ids.includes(e)),
      };

    default:
      return state;
  }
};
