import React from "react";
import { Container, Row } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AlertMsg from "./AlertMsg";
import PublicNavbar from "../../components/PublicNavbar.js";

import Users from "../../pages/Admin/Users";
import HKOrders from "../../pages/Admin/HKOrders";
import AeonOrders from "../../pages/Admin/AeonOrders";
import RoyalOrders from "../../pages/Admin/RoyalOrders";
import OnlineOrders from "../../pages/Admin/OnlineOrders";

import Products from "../../pages/Admin/Products";
import NotFoundPage from "../../pages/NotFoundPage";
import AddProduct from "../../pages/Admin/AddProduct"
import EditProduct from "../../pages/Admin/EditProduct"
import Footer from "../../components/Footer";
import OrderDetails from "../../pages/Admin/OrderDetails"
import AdminSideMenu from "../../components/AdminSideBar"

const AdminLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid style={{ padding: 0 }}>
        <AlertMsg />
        <Container
            fluid
            className="d-flex align-items-center justify-content-center create-product-header"
          >
            <span className="header-title">ADMIN</span>
          </Container>
        <Row>
        <AdminSideMenu/>
        <Switch>
          <Route exact path="/admin/users" component={Users} />
          <Route exact path="/admin/orders/hoankiem" component={HKOrders} />
          <Route exact path="/admin/orders/aeon" component={AeonOrders} />
          <Route exact path="/admin/orders/royal" component={RoyalOrders} />
          <Route exact path="/admin/orders/online" component={OnlineOrders} />
          <Route exact path="/admin/orders/:orderId" component={OrderDetails} />
          <Route exact path="/admin/products" component={Products} />
          <Route exact path="/admin/products/add" component={AddProduct} />
          <Route exact path="/admin/products/:productId/edit" component={EditProduct} />
          <Route component={NotFoundPage} />
        </Switch>
        </Row>
        
      </Container>
      <Footer/>
    </>
  );
};

export default AdminLayout;
