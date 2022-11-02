import { Fragment } from 'react';
import type { AppProps } from 'next/app';

// styled components
import { GlobalStyle } from '@styles/global-style';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
