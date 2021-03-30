import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import authActions from "../../redux/actions/auth.actions";

const UserInfo = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    avatarUrl: currentUser.avatarUrl,
  });

  const handleSubmit = () => {
    const { name, avatarUrl } = formData;
    dispatch(authActions.updateProfile(name, avatarUrl));
    setEditable(false);
  };

  const handleCancel = (e) => {
    setEditable(false);
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
      },
      function (error, result) {
        console.log(result.info.url);

        if (error) console.log(error);
        if (result && result.event === "success" && !error) {
          setFormData({
            ...formData,
            avatarUrl: result.info.url,
          });
        }
      }
    );
  };

  return (
    <div className="mt-5 text-center w-75">
      <Container>
        <Row>
          <div className="w-100">
            <h1
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                letterSpacing: "0.15em",
                
              }}
            >
              {" "}
              MY PROFILE
            </h1>
            

            <Button
              className="create-product-btn mt-5 mb-5"
              // style={{marginRight:0}}
              onClick={() => setEditable(true)}
            >
              <FontAwesomeIcon icon={faEdit} />
              EDIT
            </Button>
          </div>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            {loading ? (
              <h4>Loading...</h4>
            ) : (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <Form.Group>
                  {formData.avatarUrl && (
                    <img
                      className="avatar_pf"
                      src={formData.avatarUrl}
                      alt="avatarUrl"
                    />
                  )}
                </Form.Group>
                <Button
                  className="mb-4 edit-avatar-product-bt"
                  onClick={(e) => {
                    e.preventDefault();
                    uploadWidget();
                  }}
                  disabled={!editable}
                >
                  EDIT AVATAR
                </Button>
                <Form.Group as={Row}>
                  <Form.Label
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.15em",
                    }}
                    column
                    sm="2"
                  >
                    NAME
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        letterSpacing: "0.05em",
                      }}
                      className="form-input"
                      type="text"
                      required
                      name="name"
                      value={formData?.name}
                      onChange={onChange}
                      disabled={!editable}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.15em",
                    }}
                    column
                    sm="2"
                  >
                    EMAIL
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        letterSpacing: "0.05em",
                      }}
                      className="form-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      disabled={true}
                    />
                  </Col>
                </Form.Group>

                {editable && (
                  <ButtonGroup className="d-flex mb-3">
                    {loading ? (
                      <Button
                        className="mr-3"
                        variant="primary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Submitting...
                      </Button>
                    ) : (
                      <Button
                        className="mx-3 w-25 create-product-btn"
                        type="submit"
                        variant="primary"
                      >
                        Submit
                      </Button>
                    )}
                    <Button
                      className="mx-3 w-25"
                      variant="light"
                      onClick={handleCancel}
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                  </ButtonGroup>
                )}
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserInfo;
