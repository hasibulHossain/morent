import React from 'react';
import {Context} from './types';

const GlobalContext = React.createContext<
  Context | undefined
>(undefined);

export default GlobalContext;