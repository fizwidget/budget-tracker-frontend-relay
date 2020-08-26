import * as React from "react";
import {
  RelayEnvironmentProvider,
  preloadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { RelayEnvironment } from "../relay/environment";

const appQuery = graphql`
  query appQuery {
    categories {
      id
      name
    }
  }
`;

const preloadedQuery = preloadQuery(RelayEnvironment, appQuery, {});

interface Props {
  preloadedQuery: any;
}

const Main = (props: Props) => {
  const data = usePreloadedQuery(appQuery, props.preloadedQuery);

  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export const App = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.Suspense fallback="Loading...">
        <Main preloadedQuery={preloadedQuery} />
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
};
