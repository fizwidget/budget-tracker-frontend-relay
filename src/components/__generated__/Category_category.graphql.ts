/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Category_category = {
    readonly name: string;
    readonly " $refType": "Category_category";
};
export type Category_category$data = Category_category;
export type Category_category$key = {
    readonly " $data"?: Category_category$data;
    readonly " $fragmentRefs": FragmentRefs<"Category_category">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Category_category",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Category",
  "abstractKey": null
};
(node as any).hash = '84581bcf909021d0c947622b483ed68c';
export default node;
