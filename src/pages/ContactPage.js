import React from "react";
import { Container, Row,Form,Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <div>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center contact-header"
      >
        <span className="header-title">CONTACT US</span>
      </Container>
      <div >
      <Container className="mt-5 mb-5 w-75">
        <Row >
          <h5>We love to hear feedback and answer your questions.</h5>
        </Row>
        <Row>
          <p>Please complete the form below and we will be in touch.</p>
        </Row>
        <Row>
        <div style={{ width: "50%" }}>
        <Form >
        <Form.Group>
            <Form.Label style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Your name
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              required
              // value={reviewTitle}
              // onChange={onChangeTitle}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Your email
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              required
              // value={reviewTitle}
              // onChange={onChangeTitle}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Your message
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              required
              
              // value={reviewTitle}
              // onChange={onChangeTitle}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Your review
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="body"
              // value={reviewBody}
              // onChange={onChangeBody}
            />
          </Form.Group>
          <Button
            style={{ fontFamily: "'Open Sans', sans-serif" }}
            className="submit-review-btn"
            type="submit"
          >
            SUBMIT
          </Button>
        </Form>
      </div>
        </Row>
      </Container>
      </div>
      
    </div>
  );
};

export default ContactPage;
