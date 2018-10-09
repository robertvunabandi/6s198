import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/App.jsx";
import { makePageFunctional } from "./utils/utils.jsx";
import "./styles/main.css";

export default function main(react_element) {
  const app = <AppContainer>{react_element}</AppContainer>;
  const root = document.querySelector("#root");
  ReactDOM.render(app, root);
  makePageFunctional();
}