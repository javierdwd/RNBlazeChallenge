import React, {ReactNode, useReducer} from 'react';

import {appContextReducer, APP_INITIAL_STATE} from './AppContextReducer';
import type {AppContextState, ContextActions} from './AppContextReducer';

const AppContext = React.createContext<{
  state: AppContextState;
  dispatch: React.Dispatch<{
    type: ContextActions;
    payload?: Partial<AppContextState>;
  }>;
}>({
  state: APP_INITIAL_STATE,
  dispatch: () => {},
});

function AppContextProvider(props: {children: ReactNode}) {
  const [state, dispatch] = useReducer(appContextReducer, APP_INITIAL_STATE);
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
