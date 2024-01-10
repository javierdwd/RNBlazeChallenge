import React from 'react';
import {View, StyleSheet, ScrollViewProps} from 'react-native';

const localStyles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});

// This Class is a shorthand to declare an ScrollView for every common screen.
// It shouldn't become more complex than this.
export function ScreenBox(props: ScrollViewProps) {
  const {style} = props;

  return (
    <View {...props} style={[localStyles.container, style]}>
      {props.children}
    </View>
  );
}

export default ScreenBox;
