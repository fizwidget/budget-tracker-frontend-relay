/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MainQueryVariables = {};
export type MainQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"Categories_categories">;
};
export type MainQuery = {
    readonly response: MainQueryResponse;
    readonly variables: MainQueryVariables;
};



/*
query MainQuery {
  ...Categories_categories
}

fragment Categories_categories on Query {
  categories {
    id
    ...Category_category
  }
}

fragment Category_category on Category {
  name
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Categories_categories"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "categories",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fa1acbed7990660cd5bff5ad739edfbc",
    "id": null,
    "metadata": {},
    "name": "MainQuery",
    "operationKind": "query",
    "text": "query MainQuery {\n  ...Categories_categories\n}\n\nfragment Categories_categories on Query {\n  categories {\n    id\n    ...Category_category\n  }\n}\n\nfragment Category_category on Category {\n  name\n}\n"
  }
};
(node as any).hash = 'd2b00588c453705d99d3cb5530216a88';
export default node;
