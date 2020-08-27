import * as React from "react";
import * as ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { RelayEnvironment } from "./relay/environment";
import { App } from "./app";

ReactDOM.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <App />
  </RelayEnvironmentProvider>,
  document.getElementById("root")
);
