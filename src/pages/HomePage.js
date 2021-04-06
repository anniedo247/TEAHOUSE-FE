import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import Carousel from "../components/Carousel";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const HomePage = () => {
  const history = useHistory();
  const readMore = () => {
    history.push("/products/6064ae81a3db55d656d6a6ad");
  };
  const contactUs = () => {
    history.push("/contact");
  };

  return (
    <div>
      <Carousel />
      <Container style={{ minHeight: "80vh" }} className="mt-5">
        <Row className="d-flex justify-content-center">
          <figure xl={4} class="snip1256">
            <img
              src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617158230/teaHouse/phuong-nguyen-DgW9B48pRb4-unsplash_xzhhks.jpg"
              alt="sample42"
            />
            <figcaption>
              <h3>our drinks</h3>
              <p>
                A good cup of tea can leave us reminiscing about the taste. And
                we at TeaHouse believe that a good cup of tea will leave you
                surprised, delighted and craving for more.
              </p>
              <Link to="/drink" class="read-more">
                Shop now
              </Link>
            </figcaption>
          </figure>
          <figure xl={4} class="snip1256">
            <img
              src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617158235/teaHouse/magic-mind-ErZb6GIpDj0-unsplash_hswg5k.jpg"
              alt="sample22"
            />
            <figcaption>
              <h3>our tea</h3>
              <p>
                We offer only full leaf teas dried by the sun with love and
                care. Full leaf teas, select herbs, real fruit pieces, essential
                oils and all natural flavors. Never tea fanning's and dust.
              </p>
              <Link to="/tea" class="read-more">
                Shop now
              </Link>
            </figcaption>
          </figure>
          <figure xl={4} class="snip1256">
            <img
              src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617158226/teaHouse/photo-1565802700195-01f42888e294_fhhqg3.jpg"
              alt="sample20"
            />
            <figcaption>
              <h3>Our Gift Set</h3>
              <p>
                Whether you need a special present for a tea lover, or you'd
                like to introduce someone to our extraordinary tea, our gifts
                are the perfect choice. Beautifully packaged and ready to ship,
                TeaHouse gifts can be sent directly to the recipient.
              </p>
              <Link to="/gift" class="read-more">
                Shop now
              </Link>
            </figcaption>
          </figure>
        </Row>
        <Row className="mt-5">
          <Col xl={6}>
            <img
              style={{ width: "100%" }}
              src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617338577/teaHouse/lotus_1_d6aqx3.png"
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
                fontSize: "1.3rem",
                fontWeight: "400",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              Explore our new lotus tea. It is completely handmade and we don't
              use any additional ingredients.{" "}
            </p>
            <div className="text-center mt-5">
              <Button onClick={readMore} className="homepage-btn">
                Read More
              </Button>
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
                fontSize: "1.3rem",
                fontWeight: "400",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              You’ll want to visit TeaHouse to enjoy a cup of
              tea and the lovely atmosphere. It’s a peaceful place with colorful
              murals on the walls, comfortable seating, and the cutest decor.
              Plus the staff members are super friendly and if you’re lucky they
              may even play you a tune or two on the guitar!
            </p>
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
        <Row className="justify-content-center">
          <figure class="snip1273">
            <img src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617297370/teaHouse/photo-1606598296574-76984d958f84_bylzpg.jpg" />
            <figcaption>
              <h3>Hoan Kiem Outlet</h3>

              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  size="md"
                  color="white"
                />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "17px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  50 Ba Trieu, Hoan Kiem, Ha Noi
                </span>
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faPhoneAlt} size="md" color="white" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "17px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  +84 000 000 000
                </span>
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="md" color="white" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "17px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  info@gmail.com
                </span>
              </p>
            </figcaption>
            <a href="#"></a>
          </figure>
          <figure class="snip1273">
            <img src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617297370/teaHouse/photo-1523368749929-6b2bf370dbf8_vsd0ys.jpg" />
            <figcaption>
              <h3>Aeon Mall Outlet</h3>
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  size="md"
                  color="white"
                />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "17px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  B1 Aeon Mall, Long Bien, Ha Noi
                </span>
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faPhoneAlt} size="md" color="white" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "17px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  +84 222 222 222
                </span>
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="md" color="white" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "17px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  info@gmail.com
                </span>
              </p>
            </figcaption>
            <a href="#"></a>
          </figure>
          <figure class="snip1273">
            <img src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617297373/teaHouse/photo-1612376393268-b1369f39e4c4_ozmcmm.jpg" />
            <figcaption>
              <h3>Royal Oulet</h3>
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  size="md"
                  color="white"
                />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "17px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  Level 2, VinCom Mega Mall, Thanh Xuan
                </span>
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faPhoneAlt} size="md" color="white" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "17px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  +84 111 111 111
                </span>
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} size="md" color="white" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "17px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  info@gmail.com
                </span>
              </p>
            </figcaption>
            <a href="#"></a>
          </figure>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
