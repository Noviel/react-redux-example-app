import { createSelector } from 'reselect';

import { removeItem } from '../lib';
import { DELETE_USER_SUCCESS, TOGGLE_SELECTED } from './action-constants';
import { IAppState } from './store';

export type CheckedState = string[];

export const reducer = (state: CheckedState = [], action: any) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SELECTED:
      const index = state.indexOf(payload.id);

      if (index !== -1) {
        return removeItem(state, index);
      } else {
        return [...state, payload.id];
      }
    case DELETE_USER_SUCCESS:
      return state.filter(id => !payload.ids.includes(id));
  }
  return state;
};

export const checkedSelector = (state: IAppState) => state.checked;

export const isCheckedSelector = (id: string) =>
  createSelector(checkedSelector, checked => checked.includes(id));
