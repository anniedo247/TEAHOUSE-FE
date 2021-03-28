import React, { useEffect, useState } from "react";
import { Container, Table, Button, Modal, Form, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";

import productActions from "../../redux/actions/product.actions";

const Products = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.product.products);
  const [show, setShow] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    ingredients: "",
    price: 0,
    images: [],
    categories: [],
  });
  const handleClickProduct = (id) => {
    history.push(`/admin/products/${id}/edit`)
  } 
  useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, []);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };
  const onChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("heheh");
  };

  const onDeleteProduct = (id) => {
    console.log("productIs", id);
    if (id) dispatch(productActions.deleteProduct(id));
  };
  
  return (
    <>
      <Container fluid className="py-5" style={{ width: "70%" }}>
        <div className="d-flex justify-content-between">
          <h2>PRODUCTS</h2>
          <Button as={Link} to="/admin/products/add" variant="dark">
            <FontAwesomeIcon icon={faPlus} color="white" size="md" /> CREATE
            PRODUCT
          </Button>
        </div>
        <Table bordered hover className="order-table">
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {products.map((p) => (
            <tbody>
              <tr>
                <td>
                  <img style={{ maxWidth: "60px" }} src={p.images[0]} />
                </td>
                <td>{p.name}</td>
                <td>{new Intl.NumberFormat().format(p.price)} VND</td>
                <td>
                  {p.categories.map(
                    (c) => c.name.charAt(0).toUpperCase() + c.name.slice(1)
                  ) + "   "}
                </td>
                <td>
                  <FontAwesomeIcon
                    onClick={() => handleClickProduct(p._id)}
                    style={{ marginLeft: "35%" }}
                    icon={faEdit}
                    size="md"
                  />
                </td>
                <td>
                  <FontAwesomeIcon
                    style={{ marginLeft: "35%" }}
                    icon={faTrashAlt}
                    color="red"
                    size="md"
                    onClick={() => onDeleteProduct(p._id)}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
      {/* <Modal
            show={show}
            size="lg"
            onHide={() => setShow(false)}
            aria-labelledby="example-custom-modal-styling-title"
            className="d-flex align-items-center justify-content-center"
          >
            <Modal.Header>
              <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container >
          <h3>{selectedProduct && selectedProduct.name.toUpperCase()}</h3>
    
          <Form
            onSubmit={onSubmit}
            className="d-flex flex-column justify-content-center"
          >
           
           {newProduct.images && (
                      <div className="mb-3 text-center">
                        <img
                        width = "120px"
                        src={newProduct.images}
                        />
                      </div>
                    )}
                  
          <Button className="mx-auto w-50" onClick={uploadWidget}>Upload Images</Button>
            <Form.Row>
              <Form.Group as={Col} controlId="name">
                <Form.Label>NAME</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Product Name"
                  onChange={onChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="description">
                <Form.Label>DESCRIPTION</Form.Label>
                <Form.Control
                  type="textarea"
                  placeholder="Description"
                  onChange={onChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="ingredients">
                <Form.Label>INGREDIENTS</Form.Label>
                <Form.Control
                  type="ingredients"
                  placeholder="Ingredients"
                  onChange={onChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="price">
                <Form.Label>PRICE</Form.Label>
                <Form.Control
                  type="price"
                  placeholder="Price"
                  onChange={onChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="categories">
                <Form.Label>CATEGORY</Form.Label>
                <Form.Control
                  type="categories"
                  placeholder="Choose category"
                  onChange={onChange}
                />
              </Form.Group>
            </Form.Row>
    
            <Button onClick={handleClose} className="mx-auto w-50" variant="primary" type="submit">
              EDIT
            </Button>
          </Form>
        </Container>
            </Modal.Body>
          </Modal>
       */}
    </>
  );
};

export default Products;
