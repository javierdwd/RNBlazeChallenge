import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

import {MainNavigatorParamList, ScreensEnum} from '../../../Navigators/types';
import {ScreenBox, TextHeader} from '../../../UIKit';

import {NoTeamCTA} from '../components/NoTeamCTA';

type Props = NativeStackScreenProps<
  MainNavigatorParamList,
  ScreensEnum.Dashboard
>;

export function DashboardScreen(_: Props) {
  const {t} = useTranslation();

  return (
    <ScreenBox>
      <TextHeader variant={'h1'}>{t('dashboard.title')}</TextHeader>

      <NoTeamCTA />
    </ScreenBox>
  );
}

export default DashboardScreen;
