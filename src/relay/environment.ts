import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
  GraphQLResponse,
} from "relay-runtime";
import { fetchGraphQL } from "./fetch-graphql";

const fetchRelay = async (
  params: RequestParameters,
  variables: Variables
): Promise<GraphQLResponse> => {
  if (params.text == null) {
    throw new Error("fetchRelay called without query text");
  }
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
};

export const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
