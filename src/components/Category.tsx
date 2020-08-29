import * as React from "react";
import { useFragment } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { Category_category$key } from "./__generated__/Category_category.graphql";

const categoryFragment = graphql`
  fragment Category_category on Category {
    id
    name
  }
`;

type Props = {
  category: Category_category$key;
};

export const Category: React.FC<Props> = (props) => {
  const category = useFragment(categoryFragment, props.category);
  return (
    <div>
      {category.id}
      {category.name}
    </div>
  );
};
