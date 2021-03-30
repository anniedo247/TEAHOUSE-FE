import React, { useEffect, useState } from "react";
import { Container, Table, Button, Modal, Form, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import productActions from "../../redux/actions/product.actions";

const Products = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  const handleClickProduct = (id) => {
    history.push(`/admin/products/${id}/edit`);
  };
  useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, []);

  const onDeleteProduct = (id) => {
    console.log("productIs", id);
    if (id) dispatch(productActions.deleteProduct(id));
  };

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center admin-product-header"
      >
        <span className="header-title">PRODUCTS</span>
      </Container>
      <Container fluid className="py-5" style={{ width: "70%" }}>
        <div className="text-right">
          <Button
            as={Link}
            to="/admin/products/add"
            className="create-product-button mb-5"
          >
            <FontAwesomeIcon icon={faPlus} color="black" size="md" /> CREATE
            PRODUCT
          </Button>
        </div>

        <Table bordered hover className="order-table">
          <thead>
            <tr style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      letterSpacing: "0.15em",
                      fontSize:"20px"
                    }}>
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
                <td className="text-center">
                  <img style={{ maxWidth: "60px" }} src={p.images[0]} />
                </td>
                <td><h5>{p.name}</h5></td>
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
                    className="icon"
                    icon={faEdit}
                    size="md"
                  />
                </td>
                <td>
                  <FontAwesomeIcon
                    style={{ marginLeft: "35%" }}
                    icon={faTrashAlt}
                    color="black"
                    className="icon"
                    size="md"
                    onClick={() => onDeleteProduct(p._id)}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
      )
    </>
  );
};

export default Products;
