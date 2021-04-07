import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";

import authActions from "../../redux/actions/auth.actions";

const UserFavorite = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  const loading = useSelector((state)=>state.auth.loading)
  console.log("cc", currentUser.favorite);
  const handleFavorite = (id) => {
    // console.log("id",productId)
    dispatch(authActions.updateFavorite(id));
  };

  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.slice(0, length - 1) + "...";
    }
    return text;
  };

  return (
    <div className="mt-5 text-center w-75">
      {loading ? (
        <div style={{padding:"40px"}} className="d-flex justify-content-center align-items-center">
          <img style={{width:"60px"}} loading={true} className="loaderImage" src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617273759/teaHouse/logo-removebg-preview_1_etgr6b.png"/>
        </div>
      ) : (
        <>
      <Container style={{minHeight:"80vh"}}>
        <Row>
          <div className="w-100">
            <h1
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              {" "}
              MY FAVORITE
            </h1>
          </div>
        </Row>
        <Row className="mt-5 d-flex justify-content-center">
         
          {!loading && currentUser &&
            currentUser.favorite && currentUser.favorite.length !== 0 &&
            currentUser.favorite.map((f) => (
              <div className=" mb-5 product-card">
                <div className="product-card--wrapper">
                  <img src={f?.images[0]} />
                </div>
                <h5
                  //onClick={() => handleClickProduct(f._id)}
                  style={{
                    fontFamily: "Josefin Sans', sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  {truncateText(f.name, 19)}
                </h5>

                <div className="add-to-wishlist">
                  <FontAwesomeIcon
                    onClick={()=>handleFavorite(f._id)}
                    icon={faHeart}
                    size="lg"
                    color="#98a86d"
                  />
                  <span className="ml-3">Remove from favorite</span>
                </div>
                <p
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "18px",
                    marginTop: "6px",
                  }}
                >
                  {new Intl.NumberFormat().format(f.price)} VND
                </p>
              </div>
            ))}
     
         
        </Row>
      </Container>
      </>)}
    </div>
  );
};

export default UserFavorite;
