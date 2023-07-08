import { useMemo, useState } from 'react';
import type { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { Inter } from "next/font/google";
import { AppTheme, AppThemeColorDark, AppThemeColorLight } from '@theme';
import GlobalStyle from './global.style';
import { DropdownTheme, Layout } from '@templates';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const theme = useMemo<DefaultTheme>(() => { 
    return {
      ...AppTheme,
      colors: isDarkMode ? AppThemeColorDark : AppThemeColorLight,
    };
  }, [isDarkMode]);

  return (
      <>
      <Reset />
      <main className={inter.className}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <DropdownTheme
            onChange={(dark) => setIsDarkMode(dark)}
          />
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </main>
    </>
  );
}
