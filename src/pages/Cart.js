import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useParams,useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../redux/actions/cart.actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const removeFromCartHandler = (id) => {
    console.log("ihih", id);
    dispatch(cartActions.removeFromCart(id));
  };

  const handleAddQuantity = (id) => {
    console.log("hehe", id)
    dispatch(cartActions.addQuantity(id))
  }
  const handleSubQuantity = (id) => {
    dispatch(cartActions.subtractQuantity(id))
  }
  const handleCheckout = () => {
   history.push('/login?redirect=shipping')
  }
  return (
    <div>
      
      <Container
        fluid
        className="d-flex align-items-center justify-content-center shopping-cart-header"
      >
        <span className="header-title">SHOPPING CART</span>
      </Container>
      <Container style={{minHeight:"400px"}}>
        {cartItems.length === 0 ? (
          <h5 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "1.7rem",
            fontWeight: "400",
            minHeight:"400px"
          }}>
            Your cart is empty. <Link to="/">Go back</Link>
          </h5>
        ) : (
          <div className="mt-5">
            <Row>
              <Col xl={5}>
                <span style={{fontFamily:"'Roboto Condensed', sans-serif",fontSize:"25px",letterSpacing:"0.15em"}}>PRODUCTS</span>
              </Col>
              <Col xl={2}>
                {" "}
                <span style={{fontFamily:"'Roboto Condensed', sans-serif",fontSize:"25px",letterSpacing:"0.15em"}}>PRICE</span>
              </Col>
              <Col xl={2}>
                <span style={{fontFamily:"'Roboto Condensed', sans-serif",fontSize:"25px",letterSpacing:"0.15em"}}>QUANTITY</span>
              </Col>
              <Col xl={2}>
                <span style={{fontFamily:"'Roboto Condensed', sans-serif",fontSize:"25px",letterSpacing:"0.15em"}}>TOTAL</span>
              </Col>
              <Col xl={1}></Col>
            </Row>
            <hr/>

            {cartItems.map((item) => (
              <div
                className="mb-3 d-lex align-items-center"
                style={{ borderBottom: "1px solid gray" }}
              >
                <Row>
                  <Col xl={5}>
                    <Row>
                      <img style={{ width: "50px" }} src={item.images[0]} />{" "}
                      <div className="ml-4">
                        <h4><Link to={`/products/${item.id}`}>{item.name}</Link></h4>
                        <p style={{fontFamily:"'Montserrat', sans-serif"}}>{item.size ? <p>size: {item.size}</p> : null}</p>
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
                  <div className="cart-add-quantity-box">
                      <button onClick={()=>handleSubQuantity(item.id)}>-</button>
                      <input
                        name="quantity"
                        value={item.quantity}
                      />
                      <button onClick={()=>handleAddQuantity(item.id)}>+</button>
                    </div>
                  </Col>
                  <Col xl={2}>
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
                        {new Intl.NumberFormat().format(item.quantity * item.price)}{" "}
                        VND
                      </div>
                    )}
                  </Col>
                  <Col>
                    <FontAwesomeIcon
                      onClick={() => removeFromCartHandler(item.id)}
                      icon={faTimes}
                      size="lg"
                      color="black"
                    />{" "}
                  </Col>
                </Row>
              </div>
            ))}
              <Row>
                
                <Col><div className="text-right">
                <h4 style={{fontFamily:"'Roboto Condensed', sans-serif",fontSize:"25px",letterSpacing:"0.15em"}}>SUBTOTAL</h4>
                <h4 style={{fontFamily:"'Roboto Condensed', sans-serif",fontSize:"23px"}}>
                  {new Intl.NumberFormat().format(cartItems.reduce((acc, item) => {
                    return item.size === "medium"
                      ? acc + item.quantity * (item.price + 5000)
                      : item.size === "large"
                      ? acc + item.quantity * (item.price + 10000)
                      : acc + item.quantity * item.price;
                  }, 0))} VND
                </h4>
                <p style={{fontFamily:"'Montserrat', sans-serif",letterSpacing:"0.15em"}}>Shipping calculated at checkout</p>
              </div></Col>
              </Row>
              <Row>
              <Col>
                <Link style={{fontFamily:"'EB Garamond', serif",letterSpacing:"0.15em"}} to="/"> Continue Shopping </Link>
                </Col>
              <Col>
              <div className="text-right">
              <Button onClick={handleCheckout} className="checkout-btn"> CHECK OUT</Button>
              </div>
              </Col>
              </Row>
              
            
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
