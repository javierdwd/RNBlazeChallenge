import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {TextHeader, Button} from '..';

import type {ButtonVariant} from '../Button/Button';

const localStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  ctaImage: {
    width: 80,
    height: 80,
  },
  textContainer: {
    paddingLeft: 10,
    flexShrink: 1,
  },
  btnContainer: {
    marginTop: 10,
  },
});

type Props = {
  style?: StyleProp<ViewStyle>;
  icon: string;
  title: string;
  text: string;
  buttonText: string;
  buttonVariant?: ButtonVariant;
  onPress: (event: GestureResponderEvent) => void;
};

export function CTAPanel(props: Props) {
  return (
    <View style={[localStyles.container, props.style]}>
      <Image src={props.icon} style={localStyles.ctaImage} />

      <View style={localStyles.textContainer}>
        <TextHeader variant={'h3'} align="left">
          {props.title}
        </TextHeader>

        <Text>{props.text}</Text>

        <Button
          style={localStyles.btnContainer}
          variant={props.buttonVariant}
          text={props.buttonText}
          onPress={props.onPress}
        />
      </View>
    </View>
  );
}

export default CTAPanel;
