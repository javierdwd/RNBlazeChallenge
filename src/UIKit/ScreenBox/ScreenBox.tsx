import React from 'react';
import {ScrollView, StyleSheet, ScrollViewProps} from 'react-native';

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
    <ScrollView
      {...props}
      contentContainerStyle={[localStyles.container, style]}>
      {props.children}
    </ScrollView>
  );
}

export default ScreenBox;
