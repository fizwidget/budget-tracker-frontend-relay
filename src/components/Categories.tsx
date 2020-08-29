import * as React from "react";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import { Category } from "./Category";
import { Categories_categories$key } from "./__generated__/Categories_categories.graphql";

const categoriesFragment = graphql`
  fragment Categories_categories on Query {
    categories {
      id
      ...Category_category
    }
  }
`;

type Props = {
  categories: Categories_categories$key;
};

export const Categories: React.FC<Props> = (props) => {
  const { categories } = useFragment(categoriesFragment, props.categories);
  return (
    categories && (
      <ul>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ul>
    )
  );
};
