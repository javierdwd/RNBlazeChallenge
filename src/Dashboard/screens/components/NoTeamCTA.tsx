import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useTranslation} from 'react-i18next';

import {TextHeader, Button} from '../../../UIKit';

const localStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 60,
  },
  ctaImage: {
    width: 80,
    height: 80,
  },
  textContainer: {
    paddingLeft: 8,
    flexShrink: 1,
  },
  btnContainer: {
    marginTop: 8,
  },
});

export function NoTeamCTA() {
  const {t} = useTranslation();

  return (
    <View style={localStyles.container}>
      <Image src="SoccerBall" style={localStyles.ctaImage} />

      <View style={localStyles.textContainer}>
        <TextHeader variant={'h3'} align="left">
          {t('dashboard.no_team_cta.title')}
        </TextHeader>

        <Text>{t('dashboard.no_team_cta.text')}</Text>

        <Button
          style={localStyles.btnContainer}
          variant="info"
          text={t('dashboard.no_team_cta_btn.text')}
        />
      </View>
    </View>
  );
}

export default NoTeamCTA;
