import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import ClientForm from "./ClientForm";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/client" component={ClientForm} />
    </Switch>
  );
};

export default Routes;