import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../redux/actions/cart.actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ location }) => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const removeFromCartHandler = (id) => {
    console.log("ihih", id);
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div>
      
      <Container
        fluid
        className="d-flex align-items-center justify-content-center shopping-cart-header"
      >
        <span className="header-title">SHOPPING CART</span>
      </Container>
      <Container>
        {cartItems.length === 0 ? (
          <p>
            Your cart is empty. <Link to="/">Go back</Link>
          </p>
        ) : (
          <div>
            <Row>
              <Col xl={5}>
                <span>Product</span>
              </Col>
              <Col xl={2}>
                {" "}
                <span>Price</span>
              </Col>
              <Col xl={2}>
                <span>Quantity</span>
              </Col>
              <Col xl={2}>
                <span>Total</span>
              </Col>
              <Col xl={1}></Col>
            </Row>

            {cartItems.map((item) => (
              <div
                className="mb-3 d-lex align-items-center"
                style={{ borderBottom: "1px solid gray" }}
              >
                <Row>
                  <Col xl={5}>
                    <Row>
                      <img style={{ width: "50px" }} src={item.images[0]} />{" "}
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.size ? <p>size: {item.size}</p> : null}</p>
                      </div>
                    </Row>
                  </Col>
                  <Col xl={2}>
                    {item.size === "medium" ? (
                      <div>
                        {new Intl.NumberFormat().format(item.price + 5000)} VND
                      </div>
                    ) : item.size === "large" ? (
                      <div>
                        {new Intl.NumberFormat().format(item.price + 10000)} VND
                      </div>
                    ) : (
                      <div>
                        {new Intl.NumberFormat().format(item.price)} VND
                      </div>
                    )}
                  </Col>
                  <Col xl={2}>
                    <input
                      type="number"
                      min="0"
                      name="quantity"
                      defaultValue={item.qty}
                    />
                  </Col>
                  <Col xl={2}>
                    {item.size === "medium" ? (
                      <div>
                        {new Intl.NumberFormat().format(
                          item.qty * (item.price + 5000)
                        )}{" "}
                        VND
                      </div>
                    ) : item.size === "large" ? (
                      <div>
                        {new Intl.NumberFormat().format(
                          item.qty * (item.price + 10000)
                        )}{" "}
                        VND
                      </div>
                    ) : (
                      <div>
                        {new Intl.NumberFormat().format(item.qty * item.price)}{" "}
                        VND
                      </div>
                    )}
                  </Col>
                  <Col>
                    <FontAwesomeIcon
                      onClick={() => removeFromCartHandler(item._id)}
                      icon={faTimes}
                      size="lg"
                      color="black"
                    />{" "}
                  </Col>
                </Row>
              </div>
            ))}
            
              <div className="mr-auto">
                <h4>SUBTOTAL</h4>
                <h4>
                  {cartItems.reduce((acc, item) => {
                    return item.size === "medium"
                      ? acc + item.qty * (item.price + 5000)
                      : item.size === "large"
                      ? acc + item.qty * (item.price + 10000)
                      : acc + item.qty * item.price;
                  }, 0)}
                </h4>
              </div>
            
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
