import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faFileAlt } from "@fortawesome/free-regular-svg-icons";
const StaffSideMenu = () => {
  return (
    <Nav className=" text-left ml-2 col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-5">
        <Nav.Item>
          <Nav.Link
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              letterSpacing: "0.2em",

            }}
            as={NavLink}
            to="/staff/createorder"
            activeClassName="active"
            strict={true}
          >
            <FontAwesomeIcon icon={faIdBadge} size="lg" color="#98a86d" />
            CREATE ORDER
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              letterSpacing: "0.2em",
            }}
            as={NavLink}
            to="/staff/orders"
            activeClassName="active"
            strict={true}
          >
            <FontAwesomeIcon icon={faFileAlt} size="lg" color="#98a86d" />
            ORDERS 
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default StaffSideMenu;
