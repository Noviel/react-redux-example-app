import { createSelector } from 'reselect';

import { removeItem } from '../lib';
import { TOGGLE_SELECTED } from './action-constants';

export const reducer = (state: string[] = [], action: any) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SELECTED:
      const index = state.indexOf(payload.id);

      if (index !== -1) {
        return removeItem(state, index);
      } else {
        return [...state, payload.id];
      }
  }
  return state;
};

export const checkedSelector = (state: any) => state.checked;

export const isCheckedSelector = (id: string) =>
  createSelector(checkedSelector, checked => checked.includes(id));
