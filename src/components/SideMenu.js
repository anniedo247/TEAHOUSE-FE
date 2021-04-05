import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faFileAlt,faHeart} from "@fortawesome/free-regular-svg-icons";
const SideMenu = () => {
  return (
    <Nav className=" text-left ml-4 col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-5">
        <Nav.Item>
          <Nav.Link
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              letterSpacing: "0.2em",

            }}
            as={NavLink}
            to="/users/me/profile"
            activeClassName="active"
            strict={true}
          >
            <FontAwesomeIcon icon={faIdBadge} size="lg" color="#98a86d" /> MY
            PROFILE
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              letterSpacing: "0.2em",
            }}
            as={NavLink}
            to="/users/me/orders"
            activeClassName="active"
            strict={true}
          >
            <FontAwesomeIcon icon={faFileAlt} size="lg" color="#98a86d" /> MY
            ORDERS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              letterSpacing: "0.2em",

            }}
            as={NavLink}
            to="/users/me/favorite"
            activeClassName="active"
            strict={true}
          >
            <FontAwesomeIcon icon={faHeart} size="lg" color="#98a86d" /> MY
            FAVORITE
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default SideMenu;
