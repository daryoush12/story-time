// .storybook/preview.js

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/Config/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  styledComponentsThemes: {
    themes: [{
      main: '#191d32',
      lighter: '#282f44',
      text: '#ffffff',
  }],
    initialTheme: 1,
    label: 'name',
  },
}

