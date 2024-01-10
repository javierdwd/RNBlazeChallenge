import 'react-native';
import React from 'react';
import {CTAPanel} from './CTAPanel';

// Note: import explicitly to use the types shipped with jest.
import {it, jest, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {render, fireEvent, screen} from '@testing-library/react-native';

it('renders CTAPanel correctly', async () => {
  const mockFn = jest.fn();

  const options = {
    icon: 'example',
    title: 'Example Title',
    text: 'Some description',
    buttonText: 'Click Me!',
    buttonVariant: 'info',
  };

  render(
    <CTAPanel
      icon={options.icon}
      title={options.title}
      text={options.text}
      buttonText={options.buttonText}
      onPress={mockFn}
    />,
  );
});
