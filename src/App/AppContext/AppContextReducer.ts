export type AppContextState = {
  userTeamKey: number;
};

export const INITIAL_STATE: AppContextState = {
  userTeamKey: 0,
} as const;

export const CONTEXT_ACTIONS = {
  SET_USER_TEAM_KEY: 'SET_USER_TEAM_KEY',
};

export type ContextActions = keyof typeof CONTEXT_ACTIONS;

export function appContextReducer(
  state: AppContextState,
  action: {type: ContextActions; payload?: any},
) {
  switch (action.type) {
    case CONTEXT_ACTIONS.SET_USER_TEAM_KEY: {
      return {...state, userTeamKey: action.payload.teamKey};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
