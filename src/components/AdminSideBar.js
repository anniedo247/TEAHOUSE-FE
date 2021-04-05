import React from "react";
import { Nav, Accordion, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faFileAlt } from "@fortawesome/free-regular-svg-icons";
const AdminSideMenu = () => {
  return (
    <Nav className=" text-left col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-5">
        <Nav.Item>
          <Nav.Link
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              letterSpacing: "0.2em",
            }}
            as={NavLink}
            to="/admin/products"
            activeClassName="active"
            strict={true}
          >
            <FontAwesomeIcon
              className="mr-2 ml-3"
              icon={faIdBadge}
              size="lg"
              color="#98a86d"
            />
            PRODUCTS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  style={{
                    fontFamily: "'Roboto Condensed', sans-serif",
                    letterSpacing: "0.2em",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  eventKey="0"
                >
                  <FontAwesomeIcon
                    className="mr-2 ml-1"
                    icon={faFileAlt}
                    size="lg"
                    color="#98a86d"
                  />
                  <span>ORDERS</span>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Nav.Link
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.2em",
                    }}
                    as={NavLink}
                    to="/admin/orders/hoankiem"
                    activeClassName="active"
                    strict={true}
                  >
                    HOAN KIEM
                  </Nav.Link>
                  <Nav.Link
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.2em",
                    }}
                    as={NavLink}
                    to="/admin/orders/aeon"
                    activeClassName="active"
                    strict={true}
                  >
                    AEON MALL
                  </Nav.Link>
                  <Nav.Link
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.2em",
                    }}
                    as={NavLink}
                    to="/admin/orders/royal"
                    activeClassName="active"
                    strict={true}
                  >
                    ROYAL CITY
                  </Nav.Link>
                  <Nav.Link
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.2em",
                    }}
                    as={NavLink}
                    to="/admin/orders/online"
                    activeClassName="active"
                    strict={true}
                  >
                    ONLINE
                  </Nav.Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              letterSpacing: "0.2em",
            }}
            as={NavLink}
            to="/admin/users"
            activeClassName="active"
            strict={true}
          >
            <FontAwesomeIcon
              className="mr-2 ml-3"
              icon={faFileAlt}
              size="lg"
              color="#98a86d"
            />
            USERS
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default AdminSideMenu;
