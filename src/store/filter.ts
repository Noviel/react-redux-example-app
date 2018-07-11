import { IAppState } from './store';

export type FilterState = 'all' | 'sent' | 'unsent';

export const reducer = (state: FilterState = 'all', action: any) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload.filter;
  }
  return state;
};

export const filterSelector = (state: IAppState) => state.filter;
