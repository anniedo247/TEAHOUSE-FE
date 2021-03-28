import React, { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import reviewActions from "../redux/actions/review.actions";


const Review = ({ product,rating,changeRating,reviewBody,reviewTitle,onChangeTitle,onChangeBody,onSubmitReview}) => {
  // const dispatch = useDispatch();
  
  // const [rating, setRating] = useState(0);
  // const [reviewTitle, setReviewTitle] = useState("");
  // const [reviewBody, setReviewBody] = useState("");

  // const onSubmitReview = (e) =>{
  //   e.preventDefault()
  //   console.log(productId,reviewBody,reviewTitle,rating)
  //   dispatch(reviewActions.createReview({productId,reviewTitle,reviewBody,rating}))
  // }

  return (
    <Container>
      <div>
        <h3 style={{fontFamily:"'Roboto Condensed', sans-serif",letterSpacing:"0.15em"}}>REVIEWS</h3>
        {product && product.reviews.length === 0 ? (
          <span>There are no reviews yet</span>
        ) : (
          product &&
          product.reviews.map((r) => (
            <div>
              <div
                className="d-flex"
                style={{ borderBottom: "1px solid gray" }}
              >
                <img
                  className="review-avatar"
                  src="https://res.cloudinary.com/dbxawxez9/image/upload/v1616605635/teaHouse/default-avatar-profile-icon-vector-18942381_gnukwe.jpg"
                />
                <div className="ml-4">
                  <StarRatings
                    rating={r.rating}
                    starRatedColor=" #98a86d"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="3px"
                    name="rating"
                  />
                  <div className="d-flex">
                    <h5 style={{fontFamily:"'Roboto Condensed', sans-serif",letterSpacing:"0.1em"}}>{r.user.name} - </h5> 
                    <span><Moment format="MM/DD/YYYY">{r.createdAt}</Moment></span>
                  </div>
                  <h6 style={{fontFamily:"'Open Sans', sans-serif",fontWeight:"bolder"}}>{r.title}</h6>
                  <p style={{fontFamily:"'Open Sans', sans-serif"}}>{r.body}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div style={{marginTop:"10px"}}>
        {product && product.reviews.length === 0 ? (
          <span style={{fontFamily:"'Roboto Condensed', sans-serif",letterSpacing:"0.1em",fontSize:"20px"}}>BE THE FIRST TO REVIEW "{product.name}"</span>
        ) : (
          <span style={{fontFamily:"'Roboto Condensed', sans-serif",letterSpacing:"0.1em",fontSize:"20px"}}>WRITE YOUR REVIEW</span>
        )}
        <p style={{fontFamily:"'Open Sans', sans-serif",marginTop:"10px"}}>Your email address will not be published.</p>
      </div>
      <div style={{width:"50%"}}>
        <Form onSubmit={onSubmitReview}>
          <Form.Group>
            <StarRatings
              rating={rating}
              starRatedColor=" #98a86d"
              starHoverColor=" #98a86d"
              changeRating={changeRating}
              numberOfStars={5}
              starDimension="18px"
              starSpacing="3px"
              name="rating"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{fontFamily:"'Open Sans', sans-serif"}}>Your review title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={reviewTitle}
              onChange={onChangeTitle}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{fontFamily:"'Open Sans', sans-serif"}}>Your review</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="body"
              value={reviewBody}
              onChange={onChangeBody}
            />
          </Form.Group>
          <Button style={{fontFamily:"'Open Sans', sans-serif"}} className="submit-review-btn" type="submit">SUBMIT</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Review;
