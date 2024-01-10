import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native';
import {useTranslation} from 'react-i18next';

import type {MainNavigatorParamList} from './types';
import {ScreensEnum} from './types';

import {DashboardScreen} from '../Dashboard/screens/DashboardScreen';
import {SettingsScreen} from '../Settings/screens/SettingsScreen';

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

// TODO: Typing navigation
const ButtonRight = (navigation: any) => () =>
  (
    <Button
      onPress={() => navigation.navigate(ScreensEnum.Settings)}
      title="⚙️"
      color="red"
    />
  );

export function MainNavigator() {
  const {t} = useTranslation();

  return (
    <Stack.Navigator initialRouteName={ScreensEnum.Dashboard}>
      <Stack.Screen
        name={ScreensEnum.Dashboard}
        component={DashboardScreen}
        options={({navigation}) => {
          const withNavigation = ButtonRight(navigation);

          return {
            title: t('screens.title.dashboard'),
            headerRight: withNavigation,
          };
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
