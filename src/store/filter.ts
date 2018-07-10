export const reducer = (state: string = 'all', action: any) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload.filter;
  }
  return state;
};

export const filterSelector = (state: any) => state.filter;
