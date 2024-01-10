import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import '../i18n';

import {ErrorBoundary} from './ErrorBoundary';
import MainNavigator from '../Navigators/MainNavigator';
import {AppContextProvider} from './AppContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <AppContextProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        {/* ErrorBoundary and AppContent */}
        <ErrorBoundary>
          <MainNavigator />
        </ErrorBoundary>
      </AppContextProvider>
    </NavigationContainer>
  );
}

export default App;
