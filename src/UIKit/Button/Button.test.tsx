import 'react-native';
import React from 'react';
import {Button} from './Button';

// Note: import explicitly to use the types shipped with jest.
import {it, jest, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {render, fireEvent, screen} from '@testing-library/react-native';

it('renders button correctly', async () => {
  render(<Button text={'Click Me'} />);
});

it('call onPress correctly', async () => {
  const mockFn = jest.fn();

  render(<Button text={'Click Me'} onPress={mockFn} />);

  fireEvent.press(screen.getByRole('button'));
  expect(mockFn).toBeCalledTimes(1);
});
