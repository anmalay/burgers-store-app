import React from "react";
import ReactDOM from "react-dom";

import "./style/index.css";
import "./style/normalize.css";
import "./fonts/fonts.css";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
