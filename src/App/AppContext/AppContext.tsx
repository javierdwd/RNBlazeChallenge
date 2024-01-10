import React, {ReactNode} from 'react';

import {appContextReducer, INITIAL_STATE} from './AppContextReducer';
import type {AppContextState, ContextActions} from './AppContextReducer';

const AppContext = React.createContext(
  null as unknown as {
    state: AppContextState;
    dispatch: React.Dispatch<{
      type: ContextActions;
      payload?: any;
    }>;
  },
);

function AppContextProvider(props: {children: ReactNode}) {
  const [state, dispatch] = React.useReducer(appContextReducer, INITIAL_STATE);
  const value = {state, dispatch};

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

function useApp() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a AppContextProvider');
  }

  return context;
}

export {AppContextProvider, useApp};
