import React, { useState, useEffect } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

import productActions from "../../redux/actions/product.actions";

const EditProduct = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const [editable, setEditable] = useState(false);
  const { productId } = useParams();
  console.log("selev", productId);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    ingredients: "",
    price: 0,
    images: [],
    categories: [],
  });

  useEffect(() => {
    console.log("bbbb", productId);
    if (productId) {
      if (!selectedProduct) {
        dispatch(productActions.getSingleProduct(productId));
      }
      console.log("aaa", selectedProduct);
      if (selectedProduct) {
        setNewProduct((newProduct) => ({
          ...newProduct,
          name: selectedProduct.name,
          description: selectedProduct.description,
          ingredients: selectedProduct.ingredients,
          price: selectedProduct.price,
          images: selectedProduct.images,
          categories: selectedProduct.categories,
        }));
      }
    }
  }, [dispatch, productId]);

  const onChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      ingredients,
      price,
      images,
      categories,
    } = newProduct;
    dispatch(
      productActions.updateProduct(
        selectedProduct._id,
        name,
        description,
        ingredients,
        price,
        images,
        categories
      )
    );
  };
  const handleCancel = () => {
    setEditable(false);
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
  console.log("ccccc", newProduct);
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <>
          <Container
            fluid
            className="d-flex align-items-center justify-content-center create-product-header"
          >
            <span className="header-title">EDIT PRODUCT</span>
          </Container>
          <div style={{ textAlign: "end" }}>
            {" "}
            <Button
              className="create-product-btn mt-5"
              style={{ marginRight: "300px" }}
              onClick={() => setEditable(true)}
            >
              <FontAwesomeIcon
                
                icon={faEdit}
              />
              EDIT
            </Button>
          </div>
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
                    value={newProduct.name}
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
                    value={newProduct.description}
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
                    value={newProduct.ingredients}
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
                    value={Number(newProduct.price)}
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
                    value={newProduct?.categories.map((c) => c.name)}
                    onChange={onChange}
                  />
                </Form.Group>
              </Form.Row>
              <div className="text-center">
                <Button
                  className="mx-3 w-25 create-product-btn"
                  variant="primary"
                  type="submit"
                >
                  CREATE
                </Button>
                <Button
                  className="mx-3 w-25 create-product-btn"
                  variant="primary"
                  type="submit"
                  onClick={handleCancel}
                >
                  CANCEL
                </Button>
              </div>
              
            </Form>
          </div>
        </>
      )}
    </>
  );
};

export default EditProduct;
