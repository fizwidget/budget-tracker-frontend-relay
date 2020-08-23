import { Variables } from "relay-runtime";

export const fetchGraphQL = async (text: string, variables: Variables) => {
  const response = await fetch("https://localhost:8080/graphql", {
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
