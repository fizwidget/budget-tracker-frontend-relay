import { Variables, GraphQLResponse } from "relay-runtime";

export const fetchGraphQL = async (
  text: string,
  variables: Variables
): Promise<GraphQLResponse> => {
  const response = await fetch("http://localhost:8080/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });
  return await response.json();
};
