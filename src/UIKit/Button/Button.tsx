import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';

import {Colors} from '../Colors';

export type ButtonVariant =
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

type Props = {
  text: string;
  variant?: ButtonVariant;
} & TouchableOpacityProps;

const localStyles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 3,
    borderRadius: 4,
    width: 'auto',
    flexGrow: 0,
  },
  text: {
    fontSize: 15,
  },

  // Variants:
  neutral: {
    backgroundColor: Colors.grey,
    borderColor: Colors.grey,
  },
  info: {
    backgroundColor: Colors.blue,
    borderColor: Colors.blue,
  },
  success: {
    backgroundColor: Colors.green,
    borderColor: Colors.green,
  },
  warning: {
    backgroundColor: Colors.yellow,
    borderColor: Colors.yellow,
  },
  danger: {
    backgroundColor: Colors.red,
    borderColor: Colors.red,
  },

  neutralText: {
    color: Colors.black,
  },
  infoText: {
    color: Colors.white,
  },
  successText: {
    color: Colors.white,
  },
  warningText: {
    color: Colors.black,
  },
  dangerText: {
    color: Colors.white,
  },
});

export function Button({variant = 'neutral', ...props}: Props) {
  return (
    <TouchableOpacity
      {...props}
      style={[localStyles.container, localStyles[variant], props.style]}>
      <Text style={[localStyles.text, localStyles[`${variant}Text`]]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
