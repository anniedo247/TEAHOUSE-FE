import React from "react";
import { Container ,Row} from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import AlertMsg from "./AlertMsg";
import PublicNavbar from  "../../components/PublicNavbar"
import StaffSideMenu from "../../components/StaffSideMenu"
import CreateOrder from "../../pages/Staff/CreateOrder"
import OutletOrderDetails from "../../pages/Staff/OutletOrderDetails"
import Orders from "../../pages/Staff/Orders"

import NotFoundPage from "../../pages/NotFoundPage"
import Footer from "../../components/Footer";
import OutletOrdersDetails from "../../pages/Staff/OutletOrderDetails";

const StaffLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid style={{ padding: 0 }}>
        <AlertMsg />
        <Container
        fluid
        className="d-flex align-items-center justify-content-center staff-header"
      >
        <span className="header-title">OUTLETS</span>
      </Container>
      <Row>
      <StaffSideMenu/>
        <Switch>
          <Route exact path="/staff/createorder" component={CreateOrder} />
          <Route exact path="/staff/orders" component={Orders} />
          <Route exact path="/staff/orders/:orderId" component={OutletOrdersDetails} />

          <Route component={NotFoundPage} />
        </Switch>
      </Row>
        
      </Container>
      <Footer/>
    </>
  );
};

export default StaffLayout;
