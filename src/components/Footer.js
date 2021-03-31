import React from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div class="container-fluid pb-0 mb-0 justify-content-center footer">
      <footer>
        <div class="row justify-content-center py-5">
          <div class="col-11">
            <div class="row ">
              <div class="col-xl-4 col-md-4 col-sm-4 col-12 a">
                <Row>
                  <Container className="text-center">
                    <img
                      style={{ width: "50px", marginBottom: "30px" }}
                      src="https://res.cloudinary.com/dbxawxez9/image/upload/v1616422909/teaHouse/logo-removebg-preview_1_fb3gkc.png"
                    />
                    <span
                      style={{
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: "40px",
                      }}
                    >
                      TeaHouse
                    </span>
                  </Container>
                </Row>
                <Row>
                  <div class="row ">
                      <p class="social text-center">
                        {" "}
                        <span class="mx-3">
                          <FontAwesomeIcon
                            icon={faFacebookF}
                            size="lg"
                            color="black"
                          />{" "}
                        </span>{" "}
                        <span class="mx-2">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            size="lg"
                            color="black"
                          />{" "}
                        </span>{" "}
                        <span class="mx-2">
                          <FontAwesomeIcon
                            icon={faTwitter}
                            size="lg"
                            color="black"
                          />{" "}
                        </span>{" "}
                        <span class="mx-2">
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            size="lg"
                            color="black"
                          />{" "}
                        </span>{" "}
                      </p>
                   
                  </div>
                </Row>
              </div>

              <div class="col-xl-4 col-md-4 col-sm-4 col-12 text-center">
                <h6 class="mb-3 mb-lg-4 bold-text ">
                  <b>MENU</b>
                </h6>
                <ul class="list-unstyled">
                  <li>Home</li>
                  <li>Drink</li>
                  <li>Tea</li>
                  <li>Gift Cart</li>
                </ul>
              </div>
              <div class="col-xl-4col-md-4 col-sm-4 col-12 text-center">
                <h6 class="mb-3 mb-lg-4 bold-text mt-sm-0 mt-5">
                  <b>CONTACT US</b>
                </h6>
                <p class="mb-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    size="md"
                    color="black"
                  />
                  50, BA TRIEU, HOAN KIEM ,HA NOI
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faPhoneAlt} size="md" color="black" />
                  +84 000 0000
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} size="md" color="black" />
                  info@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
