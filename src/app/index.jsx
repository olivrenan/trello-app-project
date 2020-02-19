import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";
import React from "react";

import "../styles/styles.scss";
import App from "./App";
import store from "./store";

const renderApp = () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById("root")
  );
};

renderApp();
