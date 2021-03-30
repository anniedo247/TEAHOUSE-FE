import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CheckoutSteps from "../components/CheckoutSteps";
import cartActions from "../redux/actions/cart.actions";

 const Payment = ({ history }) => {
  const dispatch = useDispatch();
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery")
  if (!shippingAddress.address) {
    history.push('/shipping')
  }


  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(cartActions.savePaymentMethod(paymentMethod))
    history.push("/placeorder");
  };

  return (
    <div>
      
      <Container
        fluid
        className="d-flex align-items-center justify-content-center shipping-header"
      >
        <span className="header-title">PAYMENT</span>
      </Container>
      <CheckoutSteps step1 step2/>
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
                PAYMENT METHOD
              </Form.Label>
              <Form.Check
              style={{fontFamily:"'Montserrat', sans-serif",letterSpacing:"0.15em"}}
              type='radio'
              label='Cash On Delivery'
              id='PayPal'
              name='paymentMethod'
              value='Cash On Delivery'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
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

export default Payment;

