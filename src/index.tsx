import * as React from "react";
import * as ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { RelayEnvironment } from "./relay/environment";
import { Main } from "./components/Main";

ReactDOM.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Main />
  </RelayEnvironmentProvider>,
  document.getElementById("root")
);
