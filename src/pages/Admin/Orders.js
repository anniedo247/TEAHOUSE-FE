import React, { useEffect,useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";

import orderActions from "../../redux/actions/order.actions";
import PaginationBar from "../../components/PaginationBar"

const Orders = ({ history }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const totalPages = useSelector((state) => state.order.totalPages);
  const loading = useSelector((state) => state.order.loading);
  const [pageNum, setPageNum] = useState(1);
  const limit = 10;

  useEffect(() => {
    dispatch(orderActions.getAllOrders(pageNum,limit));
  }, [dispatch,pageNum,limit]);

  const handleClickOrder = (id) => {
    history.push(`/admin/orders/${id}`);
  };

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center admin-order-header"
      >
        <span className="header-title">ORDERS</span>
      </Container>
      <Container fluid className="py-5" style={{ width: "70%" }}>
        <Table bordered hover className="order-table">
          <thead>
            <tr
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
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
                <td>{order._id}</td>
                <td>{order.userId.name}</td>
                <td>
                  <Moment format="YYYY-MM-DD">{order.createdAt}</Moment>
                </td>
                <td>
                  <FontAwesomeIcon
                    onClick={() => handleClickOrder(order._id)}
                    style={{ marginLeft: "35%" }}
                    icon={faEye}
                    color="black"
                    size="md"
                  />{" "}
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
      <PaginationBar pageNum={pageNum} setPageNum={setPageNum} totalPages={totalPages}/>

    </>
  );
};

export default Orders;
