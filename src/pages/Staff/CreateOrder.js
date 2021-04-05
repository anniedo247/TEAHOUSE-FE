import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ListGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

import authActions from "../../redux/actions/auth.actions";
import productActions from "../../redux/actions/product.actions";
import PaginationBar from "../../components/PaginationBar";
import SearchBar from "../../components/SearchBar";
import cartActions from "../../redux/actions/cart.actions";

const CreateOrder = ({ history }) => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [payment,setPayment]= useState("cash")

  const currentUser = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const products = useSelector((state) => state.product.products);
  const totalPages = useSelector((state) => state.product.totalPages);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const limit = 10;

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault(e);
    setSearchTerm(searchTerm);
  };
  const handleSubmitPayment = (e)=> {
    console.log("payment",payment)
    e.preventDefault(e)
    dispatch(cartActions.savePaymentMethod(payment))

  }
  const removeFromCartHandler = (id) => {
    console.log("ihih", id);
    dispatch(cartActions.removeFromCart(id));
  };

  const handleAddQuantity = (id) => {
    console.log("hehe", id);
    dispatch(cartActions.addQuantity(id));
  };
  const handleSubQuantity = (id) => {
    dispatch(cartActions.subtractQuantity(id));
  };
  const handleSize = (e)=> {
    setSize(e.target.value)
  }
  useEffect(() => {
    dispatch(productActions.getAllProducts(pageNum, limit, "", searchTerm));
  }, [dispatch, pageNum, limit, searchTerm]);

  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.slice(0, length - 1) + "...";
    }
    return text;
  };
  const addToCartHandle = (productId) => {
    if (productId) {
      console.log("size",size)
      dispatch(cartActions.addToCart(productId, quantity, size));
    }
  };

  return (
    <div className="mt-5 text-center w-75">
      <Container>
        <Row>
          <div className="w-100">
            <h1
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                letterSpacing: "0.15em",
                marginBottom: "30px",
              }}
            >
              {" "}
              OUTLET: {currentUser?.name.toUpperCase()}
            </h1>
          </div>
        </Row>
        <Row>
          <Col lg={5}>
            <Row className="mb-3">
              <SearchBar
                searchInput={searchTerm}
                onChange={onChange}
                onSubmit={onSubmit}
              />
            </Row>
            <ListGroup>
              {products &&
                products.map((p) => (
                  <ListGroup.Item>
                    <Row>
                      <Col lg={1}>
                        <img style={{ maxWidth: "20px" }} src={p.images[0]} />
                      </Col>
                      <Col lg={5}>
                        <h6>{truncateText(p.name, 11)}</h6>
                      </Col>
                      <Col lg={3}>
                        {p.categories[0].name === "drink" ? (
                          <div class="input-group mb-3">
                            <select onChange={handleSize} name="size" id="size">
                              <option
                                value="small"
                              >
                                small
                              </option>
                              <option
                                
                                value="medium"
                              >
                                medium
                              </option>
                              <option
                                
                                value="large"
                              >
                                large
                              </option>
                            </select>
                          </div>
                        ) : null}
                      </Col>
                      <Col>
                        <FontAwesomeIcon
                          onClick={() => addToCartHandle(p._id)}
                          icon={faPlus}
                          size="md"
                          color="black"
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
            </ListGroup>
            <PaginationBar
              pageNum={pageNum}
              setPageNum={setPageNum}
              totalPages={totalPages}
            />
          </Col>
          <Col>
            <Container style={{ minHeight: "400px" }}>
              
                <div className="mt-5">
                  <Row>
                    <Col lg={5}>
                      <span
                        style={{
                          fontFamily: "'Roboto Condensed', sans-serif",
                          fontSize: "17px",
                          letterSpacing: "0.15em",
                        }}
                      >
                        PRODUCTS
                      </span>
                    </Col>
                    <Col lg={2}>
                      {" "}
                      <span
                        style={{
                          fontFamily: "'Roboto Condensed', sans-serif",
                          fontSize: "17px",
                          letterSpacing: "0.15em",
                        }}
                      >
                        PRICE
                      </span>
                    </Col>
                    <Col lg={2}>
                      <span
                        style={{
                          fontFamily: "'Roboto Condensed', sans-serif",
                          fontSize: "17px",
                          letterSpacing: "0.15em",
                        }}
                      >
                        QUANTITY
                      </span>
                    </Col>
                    <Col lg={2}>
                      <span
                        style={{
                          fontFamily: "'Roboto Condensed', sans-serif",
                          fontSize: "17px",
                          letterSpacing: "0.15em",
                        }}
                      >
                        TOTAL
                      </span>
                    </Col>
                    <Col lg={1}></Col>
                  </Row>
                  <hr />

                  {cartItems.map((item) => (
                    <div
                      className="mb-3 d-lex align-items-center"
                      style={{ borderBottom: "1px solid gray" }}
                    >
                      <Row>
                        <Col lg={5}>
                          <Row>
                        
                            <div className="ml-4">
                              <h6>
                                
                                  {item.name}
                               
                              </h6>
                              <p
                                style={{
                                  fontFamily: "'Montserrat', sans-serif",
                                }}
                              >
                                {item.size ? <p>size: {item.size}</p> : null}
                              </p>
                            </div>
                          </Row>
                        </Col>
                        <Col xl={2}>
                          {item.size === "medium" ? (
                            <div>
                              {new Intl.NumberFormat().format(
                                item.price + 5000
                              )}{" "}
                             
                            </div>
                          ) : item.size === "large" ? (
                            <div>
                              {new Intl.NumberFormat().format(
                                item.price + 10000
                              )}{" "}
                              
                            </div>
                          ) : (
                            <div>
                              {new Intl.NumberFormat().format(item.price)} 
                            </div>
                          )}
                        </Col>
                        <Col xl={2}>
                          <div className="staff-add-quantity-box">
                            <button onClick={() => handleSubQuantity(item.id)}>
                              -
                            </button>
                            <input name="quantity" value={item.quantity} />
                            <button onClick={() => handleAddQuantity(item.id)}>
                              +
                            </button>
                          </div>
                        </Col>
                        <Col xl={2}>
                          {item.size === "medium" ? (
                            <div>
                              {new Intl.NumberFormat().format(
                                item.quantity * (item.price + 5000)
                              )}{" "}
                              
                            </div>
                          ) : item.size === "large" ? (
                            <div>
                              {new Intl.NumberFormat().format(
                                item.quantity * (item.price + 10000)
                              )}{" "}
                              
                            </div>
                          ) : (
                            <div>
                              {new Intl.NumberFormat().format(
                                item.quantity * item.price
                              )}{" "}
                             
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
                    <Col>
                      <div className="text-right">
                        <h4
                          style={{
                            fontFamily: "'Roboto Condensed', sans-serif",
                            fontSize: "25px",
                            letterSpacing: "0.15em",
                          }}
                        >
                          SUBTOTAL
                        </h4>
                        <h4
                          style={{
                            fontFamily: "'Roboto Condensed', sans-serif",
                            fontSize: "23px",
                          }}
                        >
                          {new Intl.NumberFormat().format(
                            cartItems.reduce((acc, item) => {
                              return item.size === "medium"
                                ? acc + item.quantity * (item.price + 5000)
                                : item.size === "large"
                                ? acc + item.quantity * (item.price + 10000)
                                : acc + item.quantity * item.price;
                            }, 0)
                          )}{" "}
                          VND
                        </h4>
                        
                      </div>
                    </Col>
                  </Row>
                  <Row>
                  <form onSubmit={handleSubmitPayment}>
        <label>
          Payment:
          <select value={payment} onChange={(e)=>setPayment(e.target.value)}>
            <option value="cash">Cash</option>
            <option value="momo">Momo</option>
            <option value="visa">Visa</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
                  </Row>
                  <Row>
                    <Col>
                      <div className="text-right">
                        <Button
                          className="checkout-btn"
                        >
                          {" "}
                          CHECK OUT
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
            
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateOrder;
