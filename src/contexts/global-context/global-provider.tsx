import React from 'react';
import { GlobalProviderProps, State} from './types';
import { globalReducer } from './reducer';
import GlobalContext from './global-context';
import { cars } from '../../db/db';

// Initial values
const initialState: State = {
  cars: cars,
  recommendedCar: cars,
  popularCar: cars,
}

export default function GlobalProvider({children}: GlobalProviderProps) {
    const [state, dispatch] = React.useReducer(globalReducer, initialState);
    
    const value = {state, dispatch}
    return (
      <GlobalContext.Provider value={value}>
        {children}
      </GlobalContext.Provider>
    )
}