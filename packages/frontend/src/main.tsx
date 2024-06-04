import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { DarkModeProvider } from "./context/DarkModeContext/index.tsx";

const apolloClient = new ApolloClient({
  uri: "http://localhost:5555/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Todo: {
        fields: {
          createdAt: {
            read(value) {
              return new Date(value);
            },
          },
          updatedAt: {
            read(value) {
              return new Date(value);
            },
          },
        },
      },
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
