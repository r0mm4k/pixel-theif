import { ThemeProvider } from 'styled-components';

import { theme } from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/global-styles';

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export { parameters, decorators }
