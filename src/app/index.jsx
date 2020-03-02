import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";
import React from "react";

import "../styles/styles.scss";
import App from "./App";
import store from "./store";

const renderApp = () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
};

renderApp();
