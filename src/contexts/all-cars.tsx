import * as React from 'react'

type ActionType = 'increment' | 'decrement';
type Action = {type: ActionType};
type Dispatch = (action: Action) => void
type State = {count: number}
type CountProviderProps = {children: React.ReactNode}
interface Context {
    state: State; 
    dispatch: Dispatch;
} 

const CountStateContext = React.createContext<
  Context | undefined
>(undefined);

// Initial values
const initialState = {
    count: 0
}

// Reducer
function countReducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + 1}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CountProvider({children}: CountProviderProps) {
  const [state, dispatch] = React.useReducer(countReducer, initialState);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return (
    <CountStateContext.Provider value={value}>
      {children}
    </CountStateContext.Provider>
  )
}

function useCount() {
  const context = React.useContext(CountStateContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {CountProvider, useCount}