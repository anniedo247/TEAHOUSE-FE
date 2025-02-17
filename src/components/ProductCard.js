import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import cartActions from "../redux/actions/cart.actions";


export const ProductCard = ({ product, handleClickProduct }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const handleMinus = () => {
    setQuantity(quantity - 1);
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const addToCartHandle = () => {
    if (product.categories[0].name === "drink") {
      history.push(`/cart/${product._id}?qty=${quantity}&size=${size}`);
    } else {
      history.push(`/cart/${product._id}?qty=${quantity}`);
    }

    console.log(quantity, size);

    if (product._id) {
      dispatch(cartActions.addToCart(product._id, quantity, size));
    }
  };
  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.slice(0, length - 1) + "...";
    }
    return text;
  };

  return (
    <React.Fragment>
      <Col xl={4} md={6} sm={12} className="d-flex justify-content-center">
        <div className=" mb-5 product-card">
          <div className="product-card--wrapper">
            <img src={product.images[0]} />
            <div className="product-card--image-top">
              {/* <div className="heart-icon">
                <FontAwesomeIcon icon={faHeart} size="lg" />
              </div> */}
              <div className="view-icon">
                <FontAwesomeIcon onClick={handleShow} icon={faEye} size="lg" />
              </div>
            </div>
          </div>
          <h5
            onClick={() => handleClickProduct(product._id)}
            style={{
              fontFamily: "Josefin Sans', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            {truncateText(product.name, 19)}
          </h5>
          <StarRatings
            rating={product.avgRating ? product.avgRating : 0}
            starRatedColor=" #98a86d"
            // changeRating={this.changeRating}
            numberOfStars={5}
            starDimension="22px"
            starSpacing="3px"
            name="rating"
          />
          <p
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "18px",
              marginTop: "6px",
            }}
          >
            {new Intl.NumberFormat().format(product.price)} VND
          </p>
        </div>
      </Col>
      <Modal
        show={show}
        size="lg"
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        className="d-flex align-items-center justify-content-center"
      >
        <Modal.Body>
          <div>
            <div class="row">
              <div class="col-md-6">
                <img
                  className="product-detail-modal-image"
                  src={product.images[0]}
                />
              </div>
              <div class="col-md-6">
                <h1> {product.name}</h1>
                <p
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "20px",
                    marginTop: "6px",
                  }}
                >
                  {new Intl.NumberFormat().format(product.price)} VND
                </p>
                <span
                  style={{
                    fontFamily: "Open Sans', sans-serif;",
                    fontSize: "18px",
                    marginTop: "6px",
                    color: "rgb(84, 84, 84)",
                  }}
                >
                  {product.description}
                </span>
                <div>
                  {product.categories[0].name === "drink" ? (
                    <div className="d-flex flex-direction-row mt-3">
                      <p>SIZE :</p>

                      <div className="ml-3">
                        <input
                          type="radio"
                          id="small"
                          name="size"
                          value="small"
                          onChange={(e) => setSize(e.target.value)}
                          checked
                        />
                        <label className="ml-2" for="small">Small</label>

                        <input
                          className="ml-3"
                          type="radio"
                          id="medium"
                          name="size"
                          value="medium"
                          onChange={(e) => setSize(e.target.value)}
                        />
                        <label className="ml-2" for="medium">Medium(+5₫ )</label>

                        <input
                          className="ml-3"
                          type="radio"
                          id="large"
                          name="size"
                          value="large"
                          onChange={(e) => setSize(e.target.value)}
                        />
                        <label className="ml-2">Large(+10₫ )</label>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="modal-add-quantity-box">
                  <button onClick={handleMinus}>-</button>
                  <input
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button onClick={handlePlus}>+</button>
                </div>
                <button onClick={addToCartHandle} className="modal-add">Add To Cart</button>
                <div className="mt-3">
                  <span className = "modal-view-details" onClick={() => handleClickProduct(product._id)}>View Details</span>{" "}
                  
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> 
  </React.Fragment>
  );
};
export default ProductCard;

 /* */