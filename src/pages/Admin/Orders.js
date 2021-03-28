import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import orderActions from "../../redux/actions/order.actions";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);

  useEffect(() => {
    dispatch(orderActions.getAllOrders());
  }, []);

  return (
    <Container fluid className="py-5" style={{ width: "70%" }}>
      <h2>ORDERS</h2>
      <Table bordered hover className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody>
            <tr>
              <td>{order._id}</td>
              <td>{order.userId.name}</td>
              <td>
                <Moment format="YYYY-MM-DD">{order.createdAt}</Moment>
              </td>
              <td>{order.status}</td>
              <td>
                <button className="order-detail-button">Details</button>
              </td>
              <td>
                <FontAwesomeIcon
                  style={{ marginLeft: "35%" }}
                  icon={faTrashAlt}
                  color="red"
                  size="md"
                />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default Orders;
