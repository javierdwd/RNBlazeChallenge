import React from 'react';
import {Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {MainNavigatorParamList, ScreensEnum} from '../../Navigators/types';

type Props = NativeStackScreenProps<
  MainNavigatorParamList,
  ScreensEnum.Dashboard
>;

export function DashboardScreen(_: Props) {
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     _.navigation.navigate(ScreensEnum.Settings);
  //   }, 2000);
  // }, [_]);

  return <Text>Dashboard Screen</Text>;
}

export default DashboardScreen;
