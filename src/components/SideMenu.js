import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

const SideMenu = () => {
  return (
    <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/users/me/profile"
            activeClassName="active"
            strict={true}
          >
            MY PROFILE
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/users/me/orders"
            activeClassName="active"
            strict={true}
          >
            MY ORDERS
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default SideMenu;
