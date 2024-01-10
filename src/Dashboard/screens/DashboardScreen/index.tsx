import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

import {useApp, INITIAL_STATE} from '../../../App/AppContext';

import {MainNavigatorParamList, ScreensEnum} from '../../../Navigators/types';
import {ScreenBox, TextHeader} from '../../../UIKit';

import {CTAPanel} from '../../../UIKit';

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
      {state.userTeamKey === INITIAL_STATE.userTeamKey && (
        <CTAPanel
          style={localStyles.ctaNoTeam}
          icon="SoccerBall"
          title={t('dashboard.no_team_cta.title')}
          text={t('dashboard.no_team_cta.text')}
          buttonText={t('dashboard.no_team_cta_btn')}
          onPress={handleCTAPress}
        />
      )}
    </ScreenBox>
  );
}

export default DashboardScreen;
