import React from "react";
import { render } from "react-dom";
import App from "./App";
// 1. Import Apollo Client and Provider
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// 2. Set a new client
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql" //URL of the GraphQL server
});

// 3. Wrap the App Component in the Provider and pass down the client
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#root")
);
