interface Action {
  type: typeing.reset | typeing.increment;
}

export const countReducer = (state: number, action: Action): number =>{
  const result = (action.type === typeing.reset) ?  0 : ++state;
  return result;
}

export enum typeing {
  reset = 'RESET',
  increment = 'INCREMENT'
}