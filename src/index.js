import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "macro-css";
import data from "./data/index.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
