import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';

type Props = {
  text: string;
} & TouchableOpacityProps;

export function Button(props: Props) {
  return (
    <TouchableOpacity {...props}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
}
