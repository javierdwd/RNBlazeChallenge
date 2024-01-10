import React from 'react';
import {Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {MainNavigatorParamList, ScreensEnum} from '../../../Navigators/types';

type Props = NativeStackScreenProps<
  MainNavigatorParamList,
  ScreensEnum.Settings
>;

export function SettingsScreen(_: Props) {
  return <Text>Settings Screen</Text>;
}

export default SettingsScreen;
