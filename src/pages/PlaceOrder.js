import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CheckoutSteps from "../components/CheckoutSteps";
import cartActions from "../redux/actions/cart.actions";
import orderActions from "../redux/actions/order.actions";

const PlaceOrder = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  if (!cart.shippingAddress.address) {
    history.push("/shipping");
  } else if (!cart.paymentMethod) {
    history.push("/payment");
  }

  cart.subTotal = cart.cartItems.reduce((acc, item) => {
    return item.size === "medium"
      ? acc + item.quantity * (item.price + 5000)
      : item.size === "large"
      ? acc + item.quantity * (item.price + 10000)
      : acc + item.quantity * item.price;
  }, 0);
  cart.deliveryCharge = cart.subTotal > 200000 ? 0 : 10000;
  cart.total = cart.subTotal + cart.deliveryCharge;

  const handlePlaceOrder = () => {
    console.log("cart",cart.cartItems)
    dispatch(
      orderActions.createOrder({
        products: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        deliveryCharge: cart.deliveryCharge,
        total: cart.total
  })
    );
    history.push("/placeordersuccess")
  };

  return (
    <div>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center shipping-header"
      >
        <span className="header-title">PLACE ORDER</span>
      </Container>
      <CheckoutSteps step1 step2 step3 />
      <Container style={{ width: "100%" }}>
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>SHIPPING</h2>
                <p>
                  <strong>Address:</strong>
                  {cart.shippingAddress.address}, {cart.shippingAddress.ward}{" "}
                  {cart.shippingAddress.district}, {cart.shippingAddress.city}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>PAYMENT METHOD</h2>
                <strong>Method: </strong>
                {cart.paymentMethod}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>YOUR ORDER</h2>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        {" "}
                        <h5>Products</h5>
                      </Col>
                      <Col className="text-center " lg={3}>
                        <h5>Total</h5>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {cart.cartItems.map((item, index) => (
                      <Row>
                        <Col>
                          <img
                            style={{ maxWidth: "60px" }}
                            src={item.images[0]}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <div className="ml-4">
                            <h6>{item.name}</h6>
                            <p
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {item.size ? <p>size: {item.size}</p> : null}
                            </p>
                          </div>
                        </Col>
                        <Col>
                          {item.size === "medium" ? (
                            <div>
                              {item.quantity}x
                              {new Intl.NumberFormat().format(
                                item.price + 5000
                              )}{" "}
                              VND
                            </div>
                          ) : item.size === "large" ? (
                            <div>
                              {item.quantity}x
                              {new Intl.NumberFormat().format(
                                item.price + 10000
                              )}{" "}
                              VND
                            </div>
                          ) : (
                            <div>
                              {item.quantity}x
                              {new Intl.NumberFormat().format(item.price)} VND
                            </div>
                          )}{" "}
                        </Col>
                        <Col className="text-right " lg={3}>
                          {item.size === "medium" ? (
                            <div>
                              {new Intl.NumberFormat().format(
                                item.quantity * (item.price + 5000)
                              )}{" "}
                              VND
                            </div>
                          ) : item.size === "large" ? (
                            <div>
                              {new Intl.NumberFormat().format(
                                item.quantity * (item.price + 10000)
                              )}{" "}
                              VND
                            </div>
                          ) : (
                            <div>
                              {new Intl.NumberFormat().format(
                                item.quantity * item.price
                              )}{" "}
                              VND
                            </div>
                          )}
                        </Col>
                      </Row>
                    ))}
                  </ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col lg={9} className="text-right">
                    {" "}
                    SUBTOTAL :{" "}
                  </Col>
                  <Col className="text-right">
                    {new Intl.NumberFormat().format(cart.subTotal)} VND
                  </Col>
                </Row>
                <Row>
                  <Col lg={9} className="text-right">
                    {" "}
                    DELIVERY CHARGE :{" "}
                  </Col>
                  <Col className="text-right">
                    {new Intl.NumberFormat().format(cart.deliveryCharge)} VND
                  </Col>
                </Row>
                <Row>
                  <Col lg={9} className="text-right">
                    {" "}
                    TOTAL :{" "}
                  </Col>
                  <Col className="text-right">
                    {new Intl.NumberFormat().format(cart.total)} VND
                  </Col>
                </Row>
                <Row>
                  <Col className="text-right mt-3 ">
                    {" "}
                    <Button onClick={handlePlaceOrder} className="checkout-btn">
                      PLACE ORDER
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaceOrder;
