/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render, waitFor} from '@testing-library/react-native';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

it('renders correctly', async () => {
  await waitFor(() => render(<App />));
});
