import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../redux/actions/product.actions";
const AddProduct = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    ingredients: "",
    price: 0,
    images: [],
    categories: [],
  });

  const onChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    newProduct.categories = newProduct.categories.split(",").map(function(item) {
      return item.trim();
    });
    dispatch(productActions.addProduct(newProduct));
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
          setNewProduct({
            ...newProduct,
            images: result.info.url,
          });
        }
      }
    );
  };

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center create-product-header"
      >
        <span className="header-title">CREATE NEW PRODUCT</span>
      </Container>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "30px" }}
      >
        <Form
          onSubmit={onSubmit}
          className="d-flex flex-column justify-content-center"
          style={{ width: "60%" }}
        >
          {newProduct.images && (
            <div className="mb-3 text-center">
              <img width="120px" src={newProduct.images} />
            </div>
          )}

          <Button
            className="mx-auto w-50 create-product-btn"
            onClick={uploadWidget}
          >
            UPLOAD IMAGES
          </Button>
          <Form.Row>
            <Form.Group as={Col} controlId="name">
              <Form.Label
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                NAME
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "'EB Garamond', serif",
                  letterSpacing: "0.05em",
                }}
                type="name"
                placeholder="Product Name"
                onChange={onChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="description">
              <Form.Label
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                DESCRIPTION
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "'EB Garamond', serif",
                  letterSpacing: "0.05em",
                }}
                rows={4}
                as="textarea"
                placeholder="Description"
                onChange={onChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="ingredients">
              <Form.Label
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                INGREDIENTS
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "'EB Garamond', serif",
                  letterSpacing: "0.05em",
                }}
                type="ingredients"
                placeholder="Ingredients"
                onChange={onChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="price">
              <Form.Label
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                PRICE
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "'EB Garamond', serif",
                  letterSpacing: "0.05em",
                }}
                type="price"
                placeholder="Price"
                onChange={onChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="categories">
              <Form.Label
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                CATEGORY
              </Form.Label>
              <Form.Control
                style={{
                  fontFamily: "'EB Garamond', serif",
                  letterSpacing: "0.05em",
                }}
                type="categories"
                placeholder="Choose category"
                onChange={onChange}
              />
            </Form.Group>
          </Form.Row>

          <Button
            className="mx-auto w-50 create-product-btn"
            variant="primary"
            type="submit"
          >
            CREATE
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddProduct;
