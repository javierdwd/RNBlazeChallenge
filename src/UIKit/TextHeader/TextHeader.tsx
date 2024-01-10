import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, StyleProp, TextStyle} from 'react-native';

import {Colors} from '../Colors';

type Props = PropsWithChildren<{
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right';
  style?: StyleProp<TextStyle>;
}>;

const localStyles = StyleSheet.create({
  h1: {fontSize: 26, fontWeight: '700', marginBottom: 8, color: Colors.brand},
  h2: {fontSize: 22, fontWeight: '700', marginBottom: 6, color: Colors.brand},
  h3: {fontSize: 18, fontWeight: '700', marginBottom: 4},
  h4: {fontSize: 18, marginBottom: 4},
  h5: {fontSize: 16, fontWeight: '700', marginBottom: 4},
  h6: {fontSize: 16, marginBottom: 4},
});

export function TextHeader({align = 'center', ...props}: Props) {
  return (
    <Text
      style={[
        localStyles[props.variant],
        {
          textAlign: align,
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
}

export default TextHeader;
