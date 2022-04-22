import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "../utils/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={apolloClient as any}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
