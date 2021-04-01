import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const AboutUsPage = () => {
  return (
    <div>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center aboutus-header"
      >
        <span className="header-title">ABOUT US</span>
      </Container>
      <Container fluid style={{ minHeight: "400px" }}>
        <Row className="justify-content-center">
          <div className="text-center">
            <Container className="d-flex justify-content-center"><p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "40px",
                fontWeight: "600",
                color: " #98a86d",
                marginTop: "80px",
                width:"75%"
              }}
            >
              "We believe it’s not enough to do well, we must also do good".
            </p></Container>
            
          </div>
        </Row>
        <Row style={{ marginTop: "60px" }}>
          <Col xl={6}>
            <img
              style={{ maxWidth: "720px" }}
              src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617290690/teaHouse/photo-1597318181409-cf64d0b5d8a2_w0bl66.jpg"
            />
          </Col>
          <Col xl={6}>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "29px",
                textAlign: "center",
                marginTop: "100px",
              }}
            >
              OUR PHILOSOPHY
            </h1>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "17px",
                letterSpacing: "0.05em",
                margin: "20px 40px",
              }}
            >
              We believe that tea is not just a beverage but a way of life, and
              a beautiful way of life it is! It is the perfect prescription for
              our tense, overdriven, uptight world. Many people today are living
              a “coffee-crazed” lifestyle - grabbing a coffee on the run for
              that adrenalin kick to get them through the day. Sitting down to a
              cup of tea is the perfect way to step back and savour life as it
              should be lived, moment by moment.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xl={6}>
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "29px",
                textAlign: "center",
                marginTop: "100px",
              }}
            >
              OUR PEOPLE
            </h1>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "17px",
                letterSpacing: "0.05em",
                margin: "20px 40px",
              }}
            >
              Encouraging creativity within our ranks is just as important. We
              provide opportunities for career growth and recognition, like our
              signature barista competition, celebrating team members from
              different outlets. Because at the end of the day, they’re the ones
              who make your cup truly special. We just give them the recipe
            </p>
          </Col>
          <Col xl={6}>
            <img
              style={{ maxWidth: "720px" }}
              src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617291302/teaHouse/40221137_2181061488834532_3426571848446377984_n_1537345088_vvln55.jpg"
            />
          </Col>
        </Row>
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "30px",
            fontWeight: "600",
            lineHeight: "29px",
            textAlign: "center",
            marginTop: "80px",
            marginBottom: "40px",
          }}
        >
          OUR CUSTOMERS
        </div>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={1000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          <img
            style={{ maxWidth: "450px" }}
            src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617292456/teaHouse/photo-1485182708500-e8f1f318ba72_wcoavi.jpg"
          />
          <img
            style={{ maxWidth: "450px" }}
            src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617292456/teaHouse/photo-1520881363902-a0ff4e722963_wfxuyr.jpg"
          />
          <img
            style={{ maxWidth: "450px" }}
            src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617292456/teaHouse/photo-1516635707594-6949bdca3538_lonsfw.jpg"
          />
          <img
            style={{ maxWidth: "450px" }}
            src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617292455/teaHouse/photo-1543269865-0a740d43b90c_gc8vy3.jpg"
          />
          <img
            style={{ maxWidth: "450px" }}
            src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617292455/teaHouse/photo-1516007238173-044491a11604_kmlwmb.jpg"
          />
          <img
            style={{ maxWidth: "450px" }}
            src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617292455/teaHouse/photo-1522202207928-e5dcc3fd299f_reb9i3.jpg"
          />
        </Carousel>
      </Container>
    </div>
  );
};

export default AboutUsPage;
