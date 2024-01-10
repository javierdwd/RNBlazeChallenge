import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useTranslation} from 'react-i18next';

import type {MainNavigatorParamList} from './types';
import {ScreensEnum} from './types';

import {DashboardScreen} from '../Dashboard/screens/DashboardScreen';
import {SettingsScreen} from '../Settings/screens/SettingsScreen';

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

export function MainNavigator() {
  const {t} = useTranslation();

  return (
    <Stack.Navigator initialRouteName={ScreensEnum.Dashboard}>
      <Stack.Screen
        name={ScreensEnum.Dashboard}
        component={DashboardScreen}
        options={{
          title: t('screens.title.dashboard'),
        }}
      />
      <Stack.Screen
        name={ScreensEnum.Settings}
        component={SettingsScreen}
        options={{
          title: t('screens.title.settings'),
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
