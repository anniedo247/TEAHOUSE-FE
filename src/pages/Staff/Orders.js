import React, { useEffect, useState } from "react";
import { Container, Row, Table, Modal } from "react-bootstrap";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners";
import PaginationBar from "../../components/PaginationBar";

import orderActions from "../../redux/actions/order.actions";
import { useHistory } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [pageNum, setPageNum] = useState(1);
  const limit = 10;

  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);
  const totalPages = useSelector((state) => state.order.totalPages);

  const updateStatus = (id) => {
    dispatch(orderActions.updateOrderStatus(id));
  };

  const handleClickOrder = (id) => {
    history.push(`/staff/orders/${id}`);
  };

  useEffect(() => {
    dispatch(orderActions.getMyOrders(pageNum, limit));
  }, [dispatch, pageNum, limit]);
  console.log("order", orders);
  return (
    <div className="mt-5 text-center w-75">
      {loading ? (
        <div style={{padding:"40px"}} className="d-flex justify-content-center align-items-center">
          <img style={{width:"60px"}} loading={true} className="loaderImage" src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617273759/teaHouse/logo-removebg-preview_1_etgr6b.png"/>
        </div>
      ) : (
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
              ORDERS
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
                <th>PAYMENT STATUS</th>
                <th></th>
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
                    {order.isPaid ? <span>Paid</span> : <span>Pending</span>}
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
                  <td>
                    <button
                      className="markAsPaid-btn"
                      onClick={() => updateStatus(order._id)}
                    >
                      Mark as Paid
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          
        </Row>
        <PaginationBar
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPages={totalPages}
          />
      </Container>

       )} 
    </div>
  );
};

export default Orders;
