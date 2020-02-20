import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";
import React from "react";
import Modal from "react-modal";

import "../styles/styles.scss";
import App from "./App";
import store from "./store";

const appElement = document.getElementById("modal");

Modal.setAppElement("#modal");

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

renderApp(appElement);
