import { Action, ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as actions from './action-constants';

import { getData } from '../api';

type IState = any;

export const fetchUsers: any = (query: string) => async (
  dispatch: Dispatch<IState>
): Promise<Action> => {
  dispatch({ type: actions.FETCH_USERS });

  try {
    const users = await getData(query);
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

export const toggleSelected: any = (id: string) => ({
  type: actions.TOGGLE_SELECTED,
  payload: {
    id,
  },
});
