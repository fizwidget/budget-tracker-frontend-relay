import * as React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { appQuery as appQueryType } from "./__generated__/appQuery.graphql";

const appQuery = graphql`
  query appQuery {
    categories {
      id
      name
    }
  }
`;

const Main = () => {
  const data = useLazyLoadQuery<appQueryType>(appQuery, {});
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export const App = () => {
  return <React.Suspense fallback="Loading...">{<Main />}</React.Suspense>;
};
