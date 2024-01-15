import React, {useEffect, PropsWithChildren} from 'react';
import {AppState, Platform} from 'react-native';
import type {AppStateStatus} from 'react-native';
import {focusManager, QueryClient, QueryClientProvider} from 'react-query';

export const QueryClientInstance = new QueryClient();

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

export function ReactQueryContextProvider(props: PropsWithChildren) {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  return (
    <QueryClientProvider client={QueryClientInstance}>
      {props.children}
    </QueryClientProvider>
  );
}
