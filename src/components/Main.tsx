import * as React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { MainQuery } from "./__generated__/MainQuery.graphql";
import { Header } from "./Header";
import { Categories } from "./Categories";

const Content = () => {
  const categories = useLazyLoadQuery<MainQuery>(
    graphql`
      query MainQuery {
        ...Categories_categories
      }
    `,
    {}
  );
  return (
    <>
      <Header />
      <Categories categories={categories} />
    </>
  );
};

export const Main: React.FC = () => {
  return <React.Suspense fallback="Loading...">{<Content />}</React.Suspense>;
};
