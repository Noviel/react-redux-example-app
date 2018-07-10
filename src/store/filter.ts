export const reducer = (state: string = 'all', action: any) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload !== state ? action.payload : state;
  }
  return state;
} 
