import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";

export const ProductCard = ({ product, handleClickProduct }) => {
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

  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.slice(0, length - 1) + "...";
    }
    return text;
  };

  return (
    <div>
      <Col xl={4} lg={6} md={12} className="d-flex justity-content-center">
        <div className=" mb-5 product-card">
          <div className="product-card--wrapper">
            <img src={product.images[0]} />
            <div className="product-card--image-top">
              <div className="heart-icon">
                <FontAwesomeIcon icon={faHeart} size="lg" />
              </div>
              <div className="view-icon">
                <FontAwesomeIcon onClick={handleShow} icon={faEye} size="lg" />
              </div>
              <div className="add-to-cart">Add to cart</div>
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
                        <label for="small">Small</label>

                        <input
                          className="ml-3"
                          type="radio"
                          id="medium"
                          name="size"
                          value="medium"
                          onChange={(e) => setSize(e.target.value)}
                        />
                        <label for="medium">Medium</label>

                        <input
                          className="ml-3"
                          type="radio"
                          id="large"
                          name="size"
                          value="large"
                          onChange={(e) => setSize(e.target.value)}
                        />
                        <label>Large</label>
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
                <button className="modal-add">Add To Cart</button>
                <div className="mt-3">
                  <span className = "modal-view-details" onClick={() => handleClickProduct(product._id)}>View Details</span>{" "}
                  
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ProductCard;
