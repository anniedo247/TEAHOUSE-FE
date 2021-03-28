import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AlertMsg from "./AlertMsg";
import PublicNavbar from  "../../components/PublicNavbar"
import UserInfo from "../../pages/User/UserInfo";
import UserProfile from "../../pages/User/UserProfile";
import UserOrders from "../../pages/User/UserOrders";
import NotFoundPage from "../../pages/NotFoundPage"
import FavoritePage from "../../pages/FavoritePage";

const UserLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid style={{ padding: 0 }}>
        <AlertMsg />
        <Switch>
          <Route exact path="/users/me" component={UserInfo} />
          <Route exact path="/users/me/profile" component={UserProfile} />
          <Route exact path="/users/me/orders" component={UserOrders} />
          <Route exact path="/users/favorite" component={FavoritePage} />
          {/* <Route exact path="/admin/products" component={Products} />
          <Route exact path="/admin/products/add" component={AddProduct} /> */} 
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default UserLayout;
