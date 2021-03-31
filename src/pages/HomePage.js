import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useHistory } from "react-router-dom";

import Carousel from "../components/Carousel";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const HomePage = () => {
  const history = useHistory()
   const contactUs = ()=> {
     history.push('/contact')
   }

  return (
    <div>
      <Carousel />
      <Container fluid className="mt-5">
        <Row>
          <figure class="snip1256">
            <img
              src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617158230/teaHouse/phuong-nguyen-DgW9B48pRb4-unsplash_xzhhks.jpg"
              alt="sample42"
            />
            <figcaption>
              <h3>our drinks</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut.
              </p>
              <Link to="/drink" class="read-more">
                Shop now
              </Link>
            </figcaption>
          </figure>
          <figure class="snip1256">
            <img
              src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617158235/teaHouse/magic-mind-ErZb6GIpDj0-unsplash_hswg5k.jpg"
              alt="sample22"
            />
            <figcaption>
              <h3>our tea</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link to="/tea" class="read-more">
                Shop now
              </Link>
            </figcaption>
          </figure>
          <figure class="snip1256">
            <img
              src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617158226/teaHouse/photo-1565802700195-01f42888e294_fhhqg3.jpg"
              alt="sample20"
            />
            <figcaption>
              <h3>Our Gift Set</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              <Link to="/giftset" class="read-more">
                Shop now
              </Link>
            </figcaption>
          </figure>
        </Row>
        <Row className="mt-5">
          <Col xl={6}>
            <img
              style={{ maxWidth: "700px" }}
              src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617176676/teaHouse/lotus_stk7le.png"
            />
          </Col>
          <Col xl={6}>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "30px",
                fontWeight: "600",
                marginTop: "60px",
                marginLeft: "20px",
              }}
            >
              LOTUS TEA - A SPECIAL GIFT FROM HA NOI
            </h1>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.7rem",
                fontWeight: "400",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              Explore our new lotus tea. It is completely handmade and we don't
              use any additional ingredients.{" "}
            </p>
            <div className="text-center mt-5">
              
                <Button onClick= {contactUs} className="homepage-btn">Read More</Button>
              
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xl={6}>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "30px",
                fontWeight: "600",
                marginTop: "60px",
                marginLeft: "20px",
              }}
            >
              OUR BEAUTIFUL OUTLETS
            </h1>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1.7rem",
                fontWeight: "400",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="text-center mt-5">
              <Button className="homepage-btn">Contact Us</Button>
            </div>
          </Col>
          <Col xl={6}>
            <Slider autoplay={3000}>
              <img src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617165003/teaHouse/photo-1516007238173-044491a11604_btifaa.jpg" />
              <img src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617165004/teaHouse/unsplash-bonus_hptx7x.jpg" />
              <img src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617165004/teaHouse/photo-1516007112993-555f24caca6d_zvmjhn.jpg" />
            </Slider>
          </Col>
        </Row>

        <div className="text-center mt-5">
          {" "}
          <h2
            className="testimonials"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1.7rem",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            TESTIMONIALS
          </h2>
        </div>
        <TestimonialsCarousel />
      </Container>
    </div>
  );
};

export default HomePage;
