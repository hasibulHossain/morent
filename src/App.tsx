import AllCars from "./pages/all-cars";
import HomePage from "./pages/home-page";
import React, {useState} from "react";
import CarDetails from "./pages/car-details";
import Checkout from "./pages/checkout";
import Layout from "./container/layout/layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cars" element={<AppContext.Provider value={state}>
            <AllCars />
          </AppContext.Provider>} />
          <Route path="car-details" element={<CarDetails />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  )
}


export {App as default, AppContext};
