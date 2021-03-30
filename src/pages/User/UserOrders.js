import React from "react";
import {Container,Row} from "react-bootstrap"

const UserOrders = () => {
  return (
    <div className="mt-5 text-center w-75">
      <Container>
        <Row>
          <div className="w-100">
            <h1
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              {" "}
              MY ORDERS
            </h1>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default UserOrders;
