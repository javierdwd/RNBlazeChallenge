import React, {useMemo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

import {MainNavigatorParamList, ScreensEnum} from '../../../Navigators/types';

import {ScreenBox, TextHeader, SearchableList} from '../../../UIKit';
import {useApp} from '../../../App/AppContext';

import {useGetTeams} from '../../../Services/APIFootball/queryHooks';

type Props = NativeStackScreenProps<
  MainNavigatorParamList,
  ScreensEnum.Settings
>;

export function SettingsScreen(props: Props) {
  const {t} = useTranslation();
  const {state, dispatch} = useApp();

  const {data, isLoading} = useGetTeams({});

  const teams = useMemo(() => {
    return (data ?? []).map(team => ({
      label: team.team_name,
      value: team.team_key,
    }));
  }, [data]);

  const handleChangeTeam = (teamOption: {value: string; label: string}) => {
    dispatch({
      type: 'SET_USER_TEAM_KEY',
      payload: {
        userTeamKey: teamOption.value,
      },
    });

    dispatch({
      type: 'SET_USER_TEAM_NAME',
      payload: {
        userTeamName: teamOption.label,
      },
    });

    props.navigation.navigate(ScreensEnum.Dashboard);
  };

  return (
    <ScreenBox>
      <TextHeader variant={'h2'}>{t('settings.title')}</TextHeader>

      <SearchableList
        placeholder={t('settings.choose')}
        onChange={handleChangeTeam}
        options={teams}
        defaultSelected={state.userTeamKey}
        isLoading={isLoading}
      />
    </ScreenBox>
  );
}

export default SettingsScreen;
