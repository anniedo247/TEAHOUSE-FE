import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import cartActions from "../redux/actions/cart.actions";
import reviewActions from "../redux/actions/review.actions";
import productActions from "../redux/actions/product.actions";
import authActions from "../redux/actions/auth.actions"
import Review from "../components/Review";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const product = useSelector((state) => state.product.selectedProduct);
  const avgRating = useSelector((state) => state.product.avgRating);
  const loading = useSelector((state) => state.product.loading);
  const { productId } = useParams();
  console.log("avdv", avgRating);

  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewBody, setReviewBody] = useState("");

  const onChangeTitle = (e) => {
    setReviewTitle(e.target.value);
  };
  const onChangeBody = (e) => {
    setReviewBody(e.target.value);
  };
  const changeRating = (rating) => {
    setRating(rating);
  };

  

  const onSubmitReview = (e) => {
    e.preventDefault();
    console.log(productId, reviewBody, reviewTitle, rating);
    dispatch(
      reviewActions.createReview(productId, reviewTitle, reviewBody, rating)
    );
  };
  const handleFavorite = () => {
    console.log("id",productId)
  dispatch(authActions.updateFavorite(productId))
  }
  const handleMinus = () => {
    setQuantity(quantity - 1);
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const addToCartHandle = () => {
    if (product.categories[0].name === "drink") {
      history.push(`/cart/${productId}?qty=${quantity}&size=${size}`);
    } else {
      history.push(`/cart/${productId}?qty=${quantity}`);
    }

    console.log(quantity, size);

    if (productId) {
      dispatch(cartActions.addToCart(productId, quantity, size));
    }
  };

  useEffect(() => {
    dispatch(productActions.getSingleProduct(productId));
  }, [dispatch, productId]);
  return (
    <div>
      <Container >
        <Row>
          <Col xl={6}>
            {product && (
              <img style={{ width: "100%" }} src={product.images[0]} />
            )}
          </Col>
          <Col>
            {product && (
              <h1 className="product-details--name">{product.name}</h1>
            )}
            <div className="product-details--price">
              {" "}
              {new Intl.NumberFormat().format(product && product.price)} VND
            </div>
            <div>
              <StarRatings
                rating={avgRating ? avgRating : 0}
                starRatedColor=" #98a86d"
                // changeRating={this.changeRating}
                numberOfStars={5}
                starDimension="22px"
                starSpacing="3px"
                name="rating"
              />
            </div>
            <div className="product-details--description">{product && product.description}</div>
            <div className="size-input">
              {product && product.categories[0].name === "drink" ? (
                <div>
                  <Row>
                      <p>SIZE :</p>
                    
                
                      <input
                       className="ml-2"
                        type="radio"
                        id="small"
                        name="size"
                        value="small"
                        onChange={(e) => setSize(e.target.value)}
                        checked
                      />
                      <label className="ml-2" for="small">Small</label>
                    
                    
                      <input
                       className="ml-2"
                        type="radio"
                        id="medium"
                        name="size"
                        value="medium"
                        onChange={(e) => setSize(e.target.value)}
                      />
                      <label className="ml-2" for="medium">Medium(+5,000 VND)</label>
                   
                    
                      <input
                        className="ml-2"
                        type="radio"
                        id="large"
                        name="size"
                        value="large"
                        onChange={(e) => setSize(e.target.value)}
                      />
                      <label className="ml-2" >Large(+10,000 VND)</label>
                   
                  </Row>
                  <Row>
                    <div className="modal-add-quantity-box">
                      <button onClick={handleMinus}>-</button>
                      <input
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <button onClick={handlePlus}>+</button>
                    </div>
                  </Row>
                  <Row>
                    <button className="modal-add" onClick={addToCartHandle}>
                      Add to cart
                    </button>
                  </Row>
                </div>
              ) : (
                <div>
                  <Row>
                    <div className="modal-add-quantity-box">
                      <button onClick={handleMinus}>-</button>
                      <input
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <button onClick={handlePlus}>+</button>
                    </div>
                  </Row>
                  <Row>
                    <button className="modal-add" onClick={addToCartHandle}>
                      Add to cart
                    </button>
                  </Row>
                </div>
              )}
            </div>
            <Row>
              <div className="add-to-wishlist">
                <FontAwesomeIcon onClick={handleFavorite} icon={faHeart} size="lg" color="black" />
                <span className="ml-3">Add to wishlist</span>
              </div>
            </Row>
            <Row>
              <span style={{fontFamily:"'Roboto Condensed', sans-serif",fontSize:"20px",letterSpacing:"0.15em"}}>CATEGORY:</span>
              <span style={{fontFamily:"'EB Garamond', serif",fontSize:"20px",letterSpacing:"0.15em",marginLeft:"10px"}}>
                {product &&
                  product.categories.map((c) => c.name.charAt(0).toUpperCase()+c.name.slice(1)) + "   "}
              </span>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="product-info">
        <Tabs
          defaultActiveKey="description"
          id="uncontrolled-tab-example"
          className="product-info--tabs"
        >
          <Tab
            className="text-center product-details--description-tab"
            eventKey="description"
            title="DESCRIPTION"
          >
            {product && product.description}
          </Tab>
          <Tab
            className="text-center product-details--description-tab"
            eventKey="additional information"
            title="ADDITIONAL INFORMATION"
          >
            <h5>INGREDIENTS</h5>
            <p>{product && product.ingredients}</p>
          </Tab>
          <Tab
            className="mt-4"
            eventKey="reviews"
            title={`REVIEWS(${product && product.reviews.length})`}
          >
            <Review
              product={product}
              onChangeTitle={onChangeTitle}
              onChangeBody={onChangeBody}
              changeRating={changeRating}
              rating={rating}
              reviewBody={reviewBody}
              reviewTitle={reviewTitle}
              onSubmitReview={onSubmitReview}
            />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default ProductDetails;
