import React, { useEffect, useState } from "react";
import { Container, Row, Table, Modal } from "react-bootstrap";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners";

import orderActions from "../../redux/actions/order.actions";
import { useHistory } from "react-router-dom";

const UserOrders = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);

  const handleClickOrder = (id) => {
    history.push(`/users/me/orders/${id}`);
  };

  useEffect(() => {
    dispatch(orderActions.getMyOrders());
  }, []);
  console.log("order", orders);
  return (
    <div className="mt-5 text-center w-75">
      {/* {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : ( */}
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
              MY ORDERS
            </h1>
          </div>
        </Row>
        <Row>
          <Table bordered hover className="order-table mt-5 ml-5">
            <thead>
              <tr
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <th>DATE</th>
                <th>ORDER #</th>
                <th>TOTAL</th>
                <th>DELIVERY STATUS</th>
                <th></th>
              </tr>
            </thead>
            {orders.map((order) => (
              <tbody>
                <tr
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "17px",
                    fontWeight: "400",
                  }}
                >
                  <td>
                    <Moment format="YYYY-MM-DD">{order.createdAt}</Moment>
                  </td>
                  <td>{order._id}</td>
                  <td>{new Intl.NumberFormat().format(order.total)} VND</td>

                  <td>
                    {order.isDelivery ? (
                      <span>Delivered</span>
                    ) : (
                      <span>Shipping</span>
                    )}
                  </td>
                  <td>
                    <FontAwesomeIcon
                      onClick={() => handleClickOrder(order._id)}
                    
                      style={{ marginLeft: "35%" }}
                      icon={faEye}
                      color="black"
                      size="md"
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Row>
      </Container>
      
      {/* )} */}
    </div>
  );
};

export default UserOrders;
