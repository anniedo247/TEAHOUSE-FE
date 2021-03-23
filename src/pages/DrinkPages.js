import React from "react";
import { Container, Row } from "react-bootstrap";
const DrinkPages = () => {
  return (
    <Container fluid className="text-center drink-header">
      <Row>
        <div>DRINK</div>
        <hr/>
      </Row>
      <Row>
        <div>
          <span>FRUIT TEA</span>
          <span>FLAVORED TEA</span>
          <span>TEA LATTE</span>
        </div>
      </Row>
    </Container>
  );
};

export default DrinkPages;
