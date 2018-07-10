import { Action, ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as actions from './action-constants';

import { API } from '../api';

type IState = any;

export const fetchUsers: any = (query: string) => async (
  dispatch: Dispatch<IState>
): Promise<Action> => {
  dispatch({ type: actions.FETCH_USERS });

  try {
    const users = await API.fetch(query);
    return dispatch({
      type: actions.FETCH_USERS_SUCCESS,
      payload: {
        users,
      },
    });
  } catch (e) {
    return dispatch({ type: 'SOME_ERROR' });
  }
};

export const send: any = (to: any) => async (
  dispatch: Dispatch<IState>
): Promise<Action> => {
  try {
    const result = await API.send(to);
    return dispatch({
      type: actions.SEND_SUCCESS,
      payload: {
        result,
      },
    });
  } catch (e) {
    return dispatch({ type: 'SOME_ERROR' });
  }
};

export const deleteUsers: any = (ids: string[]) => async (
  dispatch: Dispatch<IState>
): Promise<Action> => {
  try {
    const result = await API.delete(ids);
    return dispatch({
      type: actions.DELETE_SUCCESS,
      payload: {
        ids,
      },
    });
  } catch (error) {
    return dispatch({ type: actions.DELETE_FAILED, payload: { error } });
  }
};

export const createUser: any = (data: any) => async (
  dispatch: Dispatch<IState>
): Promise<Action> => {
  try {
    const result = await API.create(data);
    return dispatch({
      type: actions.CREATE_USER_SUCCESS,
      payload: {
        result,
      },
    });
  } catch (error) {
    return dispatch({ type: actions.CREATE_USER_FAILED, payload: { error } });
  }
};

export const toggleSelected: any = (id: string) => ({
  type: actions.TOGGLE_SELECTED,
  payload: {
    id,
  },
});

export const setFilter: any = (filter: string) => ({
  type: actions.SET_FILTER,
  payload: {
    filter,
  },
});
