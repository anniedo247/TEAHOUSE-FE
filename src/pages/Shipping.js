import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CheckoutSteps from "../components/CheckoutSteps";
import cartActions from "../redux/actions/cart.actions";

 const Shipping = ({ history }) => {
  const dispatch = useDispatch();
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);

  const [address, setAddress] = useState(shippingAddress.address);
  const [ward, setWard] = useState(shippingAddress.ward);
  const [district, setDistrict] = useState(shippingAddress.district);
  const [city, setCity] = useState(shippingAddress.city);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      cartActions.saveShippingAddress({ address, ward, district, city })
    );
    history.push("/payment");
  };

  return (
    <div>
      
      <Container
        fluid
        className="d-flex align-items-center justify-content-center shipping-header"
      >
        <span className="header-title">SHIPPING</span>
      </Container>
      <CheckoutSteps step1 />
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "30px" }}
      >
        <Form
          onSubmit={onSubmit}
          className="d-flex flex-column justify-content-center"
          style={{ width: "60%" }}
        >
          <Form.Row>
            <Form.Group as={Col} controlId="address">
              <Form.Label
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                ADDRESS
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "'EB Garamond', serif",
                  letterSpacing: "0.05em",
                }}
                type="text"
                placeholder="Enter Address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="ward">
              <Form.Label
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                WARD
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "'EB Garamond', serif",
                  letterSpacing: "0.05em",
                }}
                type="text"
                placeholder="Enter Ward"
                value={ward}
                onChange={(e) => setWard(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="district">
              <Form.Label
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                DISTRICT
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "'EB Garamond', serif",
                  letterSpacing: "0.05em",
                }}
                type="text"
                placeholder="Enter District"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="city">
              <Form.Label
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                CITY
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "'EB Garamond', serif",
                  letterSpacing: "0.05em",
                }}
                type="text"
                placeholder="Enter City"
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Button className="mx-auto w-25 create-product-btn" type="submit">
            CONTINUE
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Shipping;
