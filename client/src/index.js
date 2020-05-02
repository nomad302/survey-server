import React from "react";
import ReactDOM from "react-dom";
import Provider from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";

// create a redux store using
const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
