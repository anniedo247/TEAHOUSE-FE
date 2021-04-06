import React, { useState, useEffect } from "react";
import { Container, Form, Button,ButtonGroup, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

import productActions from "../../redux/actions/product.actions";

const EditProduct = ({history}) => {
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

  useEffect(()=>{
    if(productId){
       dispatch(productActions.getSingleProduct(productId));
    }
  },[dispatch,productId])
  useEffect(()=> {
    if (selectedProduct) {
            setNewProduct((newProduct) => ({
              ...newProduct,
              name: selectedProduct.name,
              description: selectedProduct.description,
              ingredients: selectedProduct.ingredients,
              price: selectedProduct.price,
              images: selectedProduct.images,
              categories: selectedProduct.categories,
            }))};
  },[selectedProduct])
  

  const onChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let {
      name,
      description,
      ingredients,
      price,
      images,
      categories,
    } = newProduct;
    dispatch(
      productActions.updateProduct({
        productId:selectedProduct._id,
        name,
        description,
        ingredients,
        price,
        images,
        categories
      })
    );
    setEditable(false);
    history.push('/admin/products')

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
    <div className="mt-5 text-center w-75">
      {loading ? (
        <div style={{padding:"40px"}} className="d-flex justify-content-center align-items-center">
          <img style={{width:"60px"}} loading={true} className="loaderImage" src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617273759/teaHouse/logo-removebg-preview_1_etgr6b.png"/>
        </div>
      ) : (
        <>
          
          <Container>
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
            className="d-flex justify-content-center mb-5"
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
                disabled={!editable}
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
                    disabled={!editable}
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
                    disabled={!editable}
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
                    disabled={!editable}
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
                    disabled={!editable}
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
                    disabled={!editable}
                  />
                </Form.Group>
              </Form.Row>
              {editable && (
                  <ButtonGroup className="d-flex mb-3">
                    {/* {loading ? (
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
                    ) : ( */}
                      <Button
                        className="mx-3 w-25 create-product-btn"
                        type="submit"
                      >
                        SUBMIT
                      </Button>
                    {/* )} */}
                    <Button
                      className="mx-3 w-25 create-product-bt"
                      onClick={handleCancel}
                      disabled={!editable}
                    >
                      CANCEL
                    </Button>
                  </ButtonGroup>
                )}
              {/* <div className="text-center">
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
              </div> */}
              
            </Form>
          </div>
          </Container>
          
        </>
      )} 
    </div>
  );
};

export default EditProduct;
