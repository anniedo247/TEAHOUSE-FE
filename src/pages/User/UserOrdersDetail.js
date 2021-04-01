import React, { useEffect } from "react";
import { Row, Col, Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory,Link } from "react-router-dom";
import ClipLoader from "react-spinners";

import orderActions from "../../redux/actions/order.actions";

const UserOrdersDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const order = useSelector((state) => state.order.selectedOrder);
  const loading = useSelector((state) => state.order.loading);
  const { orderId } = useParams();

  const handleGoBack = () => {
    history.push("/users/me/orders");
  };

  useEffect(() => {
    dispatch(orderActions.getSingleOrder(orderId));
  }, [dispatch, orderId]);
  console.log("order", order);
  return (
    <div className="mt-5 mb-5 w-75">
      {/* {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : ( */}
        <Container style={{ width: "100%" }}>
          <Row>
            <div>
              <h3
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: "0.15em",
                  marginLeft:"35px"
                }}
              >
                {" "}
                ORDERS # : {order?._id}
              </h3>
            </div>
          </Row>
          <Row>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.15em",
                    }}
                  >
                    SHIPPING
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                  >
                    <strong>Address: </strong>
                    {order?.shippingAddress.address},{" "}
                    {order?.shippingAddress.ward}{" "}
                    {order?.shippingAddress.district},{" "}
                    {order?.shippingAddress.city}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.15em",
                    }}
                  >
                    PAYMENT METHOD
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                  >
                    <strong>Method: </strong>
                    {order?.paymentMethod}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.15em",
                    }}
                  >
                    DELIVERY STATUS
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                  >
                    {order?.isDelivered ? (
                      <span>Delivered</span>
                    ) : (
                      <span>Shipping</span>
                    )}
                  </p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.15em",
                    }}
                  >
                    ORDER ITEMS
                  </h3>
                  <ListGroup>
                    <ListGroup.Item>
                      <Row>
                        <Col>
                          {" "}
                          <h5
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "17px",
                              fontWeight: "600",
                            }}
                          >
                            Products
                          </h5>
                        </Col>
                        <Col className="text-center " lg={3}>
                          <h5
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "17px",
                              fontWeight: "600",
                            }}
                          >
                            Total
                          </h5>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {order?.products.map((item) => (
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
                            <div className="ml-2">
                              <h6
                                style={{
                                  fontFamily: "'Montserrat', sans-serif",
                                  fontSize: "17px",
                                  fontWeight: "600",
                                }}
                              >
                                <Link to={`/products/${item._id}`}>{item.name}</Link>
                              </h6>
                              <p
                                style={{
                                  fontFamily: "'Montserrat', sans-serif",
                                }}
                              >
                                {item.size ? <p>size: {item.size}</p> : null}
                              </p>
                            </div>
                          </Col>
                          <Col
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "17px",
                              fontWeight: "400",
                            }}
                          >
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
                          <Col
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "17px",
                              fontWeight: "400",
                            }}
                            className="text-right "
                            lg={3}
                          >
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
                  <Row >
                    <Col
                      lg={9}
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                      className="text-right"
                    >
                      {" "}
                      DELIVERY CHARGE :{" "}
                    </Col>
                    <Col
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                      className="text-right"
                    >
                      {new Intl.NumberFormat().format(order?.deliveryCharge)}{" "}
                      VND
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col
                      lg={9}
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                      className="text-right"
                    >
                      {" "}
                      TOTAL :{" "}
                    </Col>
                    <Col
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                      className="text-right"
                    >
                      {new Intl.NumberFormat().format(order?.total)} VND
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-right mt-3 ">
                      {" "}
                      <Button onClick={handleGoBack} className="checkout-btn">
                        GO BACK
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      {/* )} */}
    </div>
  );
};

export default UserOrdersDetail;
