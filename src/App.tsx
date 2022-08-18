import AllCars from "./pages/all-cars";
import HomePage from "./pages/home-page";
import Login from "./pages/login-page";
import React, {useRef, useState} from "react";

interface State {
  isFilterOpen: boolean;
  setIsFilterOpen: (currentState: boolean) => void;
}

const AppContext = React.createContext<State>({
  isFilterOpen: true,
  setIsFilterOpen: () => {}
});

function App() {
  const [state, setState] = useState<State>({
    isFilterOpen: true,
    setIsFilterOpen: toggleIsFilterOpen
  });

  function toggleIsFilterOpen (currentState: boolean): void {
    console.log('clicked => ', currentState)
    setState(previousState => ({
      ...previousState,
      isFilterOpen: currentState,
    }));
  };

  return (
    <AppContext.Provider value={state}>
      {/* // <Login /> */}
      {/* // <HomePage /> */}
      <AllCars />
    </AppContext.Provider>
  )
}

export {App as default, AppContext};
