import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import { getThemeProps } from 'utils/get-theme';
import { TypeTheme } from 'types/theme';
import apolloClient from 'utils/apollo-client';
import { globalStyles } from 'styles/global';
import { useThemeStore, ThemeStore } from 'store/switch-theme';

const applyTheme = (currentTheme: TypeTheme) => {
  globalStyles();
  const theme = getThemeProps(currentTheme);
  const classTheme = document.querySelector('body') as HTMLBodyElement;
  classTheme.className = theme;
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useThemeStore() as ThemeStore;

  useEffect(() => {
    applyTheme(theme);
    setIsLoading(false);
  }, [theme]);

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
