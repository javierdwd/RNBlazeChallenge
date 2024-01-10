import React, {Component, ErrorInfo, ReactNode} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';

import {TextHeader} from '../UIKit';

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return {hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // We might call to Crashlitycs or Senty services here.
    console.error('Uncaught error:', error, errorInfo);
  }

  callSupport() {
    Linking.openURL('mailto:support@blaze.com?subject=AppCrash');
  }

  public render() {
    if (this.state.hasError) {
      return (
        <SafeAreaView>
          <View style={localStyles.container}>
            <TextHeader variant="h1">
              There was an{'\n'}unxpected error
            </TextHeader>
            <Text>Please, contact support </Text>
            <TouchableOpacity onPress={this.callSupport}>
              <Text>support@blaze.com</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
