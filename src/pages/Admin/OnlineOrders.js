import React, { useEffect, useState } from "react";
import { Container, Table,Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";

import orderActions from "../../redux/actions/order.actions";
import PaginationBar from "../../components/PaginationBar";
import { date } from "yup/lib/locale";

const OnlineOrders = ({ history }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const totalPages = useSelector((state) => state.order.totalPages);
  const loading = useSelector((state) => state.order.loading);
  const [pageNum, setPageNum] = useState(1);
  const limit = 10;

  useEffect(() => {
    dispatch(orderActions.getAllOnlineOrders({pageNum, limit}));
  }, [dispatch, pageNum, limit]);

  const handleClickOrder = (id) => {
    history.push(`/admin/orders/${id}`);
  };

  return (
    <div className="mt-5 text-center w-75">
      {loading ? (
        <div style={{padding:"40px"}} className="d-flex justify-content-center align-items-center">
          <img style={{width:"60px"}} loading={true} className="loaderImage" src="https://res.cloudinary.com/dbxawxez9/image/upload/v1617273759/teaHouse/logo-removebg-preview_1_etgr6b.png"/>
        </div>
      ) : (
      <Container>
        <Row>
          <input type="date" />
        </Row>
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
              <th>PAID</th>
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
                  {" "}
                  {order?.isPaid ? (
                    <span>
                      Paid
                     
                    </span>
                  ) : (
                    <span>Pending</span>
                  )}
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
                
              </tr>
            </tbody>
          ))}
        </Table>
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

export default OnlineOrders;
