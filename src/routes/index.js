import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout"


const Routes = () => {
  return (
    <Switch>
      <PrivateRoute path="/admin" component = {AdminLayout}/>
      <PrivateRoute path="/users" component = {UserLayout}/>
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;
