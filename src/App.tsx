import AllCars from "./pages/all-cars";
import HomePage from "./pages/home-page";
import Login from "./pages/login-page";
import React, {useState, useEffect} from "react";
import CarDetails from "./pages/car-details";
import Checkout from "./pages/checkout";
import Layout from "./container/layout/layout";

interface book {
  id: string;
  title: string;
}

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
      <Layout>
        {/* // <Login /> */}
        {/* // <HomePage /> */}
        {/* <AllCars /> */}
        {/* <CarDetails /> */}
        <Checkout />
      </Layout>
    </AppContext.Provider>
  )
}


export {App as default, AppContext};
