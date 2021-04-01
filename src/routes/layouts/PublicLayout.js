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
import TeaPages from "../../pages/TeaPages";
import AboutUsPage from "../../pages/AboutUsPage";

import GiftPage from "../../pages/GiftPage"
import ProductDetails from "../../pages/ProductDetails";
import Cart from "../../pages/Cart"
import Shipping from "../../pages/Shipping";
import Payment from "../../pages/Payment"
import PlaceOrder from "../../pages/PlaceOrder";
import OrderDone from "../../pages/OrderDone"
import Footer from "../../components/Footer";

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
          <Route exact path="/tea" component={TeaPages}/>
          <Route exact path="/gift" component={GiftPage}/>
          <Route exact path="/aboutus" component={AboutUsPage}/>
          <Route exact path="/products/:productId" component={ProductDetails}/>
          <Route exact path="/cart/:productId?" component={Cart}/>
          <PrivateRoute exact path="/shipping" component={Shipping}/>
          <PrivateRoute exact path="/payment" component={Payment}/>
          <PrivateRoute exact path="/placeorder" component={PlaceOrder}/>
          <PrivateRoute exact path="/placeordersuccess" component={OrderDone}/>

          <Route component={NotFoundPage} />
        </Switch>
      </Container>
      <Footer/>
    </>
  );
};

export default PublicLayout;
