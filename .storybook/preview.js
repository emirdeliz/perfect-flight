import { ThemeProvider } from 'styled-components';
import {
  Colors,
  Display,
  FontSize,
  FontWeight,
  LineHeight,
  Margin,
  Opacity,
  Padding,
  Radius,
  Shadow,
  ZIndex,
} from '@theme';
import GlobalStyle from '../src/pages/global.style.ts';
import '../src/assets/fontello/css/fontello.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
};

export const decorators = [
  (Story) => (
    <ThemeProvider
      theme={{
        colors: Colors,
        display: Display,
        fontSize: FontSize,
        fontWeight: FontWeight,
        lineHeight: LineHeight,
        margin: Margin,
        opacity: Opacity,
        padding: Padding,
        radius: Radius,
        shadow: Shadow,
        zIndex: ZIndex,
      }}
    >
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
