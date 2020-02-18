import React from "react";
import { withRouter } from "react-router";

import { TextEditor } from "./components";

const App = () => {
  return (
    <div className="app">
      <TextEditor />
    </div>
  );
};

export default withRouter(App);
