import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AlertMsg from "./AlertMsg";
import PublicNavbar from "../../components/PublicNavbar";
import PrivateRoute from "../PrivateRoute";

import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage";
import DrinkPages from "../../pages/DrinkPages";
import ProductDetails from "../../pages/ProductDetails";
import Cart from "../../pages/Cart"

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid style={{ padding: 0 }}>
        <AlertMsg />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage}/>
          <Route exact path="/drink" component={DrinkPages}/>
          <Route exact path="/products/:productId" component={ProductDetails}/>
          <Route exact path="/cart/:productId?" component={Cart}/>
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
