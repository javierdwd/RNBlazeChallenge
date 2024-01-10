import React from 'react';

import {StyleSheet, TextInput, TextInputProps} from 'react-native';

import {Colors} from '../../Colors';

const localStyles = StyleSheet.create({
  input: {
    backgroundColor: Colors.grey,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 14,
    borderRadius: 4,
  },
});

export function Input({style, ...props}: TextInputProps) {
  return (
    <TextInput
      style={[localStyles.input, style]}
      placeholderTextColor={Colors.black}
      {...props}
    />
  );
}

export default Input;
