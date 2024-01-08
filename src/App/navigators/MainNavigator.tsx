import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {DashboardScreen} from '../../Dashboard/screens/DashboardScreen';
import {SettingsScreen} from '../../Settings/screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
