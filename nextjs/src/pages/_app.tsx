import "/src/styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";
import { apolloClient } from "src/apollo/apolloClient";

const App = (props: AppProps) => {
  const { user } = props.pageProps;
  return (
    <UserProvider user={user}>
      <ApolloProvider client={apolloClient}>
        <props.Component {...props.pageProps} />;
      </ApolloProvider>
    </UserProvider>
  );
};

export default App;
