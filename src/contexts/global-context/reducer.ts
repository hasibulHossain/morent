import { State, Action } from './types';

// Reducer
export function globalReducer(state: State, action: Action) {
  switch (action.type) {
    case 'initial': {
      return state;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}