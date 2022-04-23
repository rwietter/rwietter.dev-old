import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from 'styles/theme';
import apolloClient from '../utils/apollo-client';
import { globalStyles } from '../styles/global';

const applyTheme = (currentTheme: string) => {
  globalStyles();
  const theme = currentTheme === 'light' ? darkTheme : lightTheme;
  const classTheme = document.querySelector('body') as HTMLBodyElement;
  classTheme.className = theme;
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  const currentTheme = 'dark';
  useEffect(() => {
    applyTheme(currentTheme);
    setIsLoading(false);
  }, []);

  return (
    <div>
      {!isLoading && (
        <ApolloProvider client={apolloClient as any}>
          <Component {...pageProps} />
        </ApolloProvider>
      )}
    </div>
  );
}

export default MyApp;
