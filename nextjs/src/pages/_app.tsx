import "/src/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { apolloClient } from "src/apollo/apolloClient";
import { UserContextProviders } from "src/contexts/userContext";

const App = (props: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <UserContextProviders>
        <props.Component {...props.pageProps} />
      </UserContextProviders>
    </ApolloProvider>
  );
};

export default App;
