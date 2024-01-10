import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

import {useApp, APP_INITIAL_STATE} from '../../../App/AppContext';

import {MainNavigatorParamList, ScreensEnum} from '../../../Navigators/types';
import {ScreenBox, TextHeader, CTAPanel} from '../../../UIKit';

import {localStyles} from './styles';

type Props = NativeStackScreenProps<
  MainNavigatorParamList,
  ScreensEnum.Dashboard
>;

export function DashboardScreen(props: Props) {
  const {t} = useTranslation();
  const {state} = useApp();

  const handleCTAPress = () => props.navigation.navigate(ScreensEnum.Settings);

  return (
    <ScreenBox>
      <TextHeader variant={'h1'}>{t('dashboard.title')}</TextHeader>

      {/* EMPTY STATE */}
      {state.userTeamKey === APP_INITIAL_STATE.userTeamKey && (
        <CTAPanel
          style={localStyles.ctaNoTeam}
          icon="SoccerBall"
          title={t('dashboard.no_team_cta.title')}
          text={t('dashboard.no_team_cta.text')}
          buttonText={t('dashboard.no_team_cta_btn')}
          onPress={handleCTAPress}
        />
      )}

      {!!state.userTeamName && (
        <TextHeader variant="h3">{state.userTeamName}</TextHeader>
      )}
    </ScreenBox>
  );
}

export default DashboardScreen;
