import { Route, Switch } from "react-router-dom";
import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import ActiveBoard from "./components/ActiveBoard";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/boards/:id" component={ActiveBoard} />
      </Switch>
    </div>
  );
};

export default App;
