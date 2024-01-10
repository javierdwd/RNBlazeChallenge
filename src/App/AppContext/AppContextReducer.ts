export type AppContextState = {
  userTeamKey: string;
  userTeamName: string;
};

export const APP_INITIAL_STATE: AppContextState = {
  userTeamKey: '',
  userTeamName: '',
} as const;

export const CONTEXT_ACTIONS = {
  SET_USER_TEAM_KEY: 'SET_USER_TEAM_KEY',
  SET_USER_TEAM_NAME: 'SET_USER_TEAM_NAME',
};

export type ContextActions = keyof typeof CONTEXT_ACTIONS;

export function appContextReducer(
  state: AppContextState,
  action: {type: ContextActions; payload?: Partial<AppContextState>},
): AppContextState {
  switch (action.type) {
    case CONTEXT_ACTIONS.SET_USER_TEAM_KEY: {
      return {...state, userTeamKey: action.payload?.userTeamKey || ''};
    }
    case CONTEXT_ACTIONS.SET_USER_TEAM_NAME: {
      return {...state, userTeamName: action.payload?.userTeamName || ''};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
