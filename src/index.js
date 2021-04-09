import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Singleton from "./Singleton";
import Adapter from "./Adapter";
import Strategy from "./Strategy";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <Singleton /> */}
    {/* <Adapter /> */}
    <Strategy />
  </StrictMode>,
  rootElement
);
