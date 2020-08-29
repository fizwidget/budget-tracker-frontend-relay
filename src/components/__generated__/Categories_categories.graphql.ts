/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Categories_categories = {
    readonly categories: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Category_category">;
    }> | null;
    readonly " $refType": "Categories_categories";
};
export type Categories_categories$data = Categories_categories;
export type Categories_categories$key = {
    readonly " $data"?: Categories_categories$data;
    readonly " $fragmentRefs": FragmentRefs<"Categories_categories">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Categories_categories",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "Category_category"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '1e1565b00e6516813258529959693dc2';
export default node;
