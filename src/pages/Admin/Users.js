import React, { useEffect, useState } from "react";
import { Container, Table, Modal, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCheck,
  faTimes,
  faTrashAlt,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import userActions from "../../redux/actions/user.actions";
import PaginationBar from "../../components/PaginationBar"

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);
  const totalPages = useSelector((state) => state.user.totalPages);
  const loading = useSelector((state) => state.user.loading);
  const [pageNum, setPageNum] = useState(1);
  const limit = 10;
  

  useEffect(() => {
    dispatch(userActions.getAllUsers());
  }, []);

  
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center admin-user-header"
      >
        <span className="header-title">USERS</span>
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
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
            </tr>
          </thead>
          {users.map((user) => (
            <tbody>
              <tr
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "17px",
                  fontWeight: "400",
                }}
              >
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td> {user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <FontAwesomeIcon
                      style={{ marginLeft: "45%" }}
                      icon={faCheck}
                      color="green"
                      size="lg"
                    />
                  ) : (
                    <FontAwesomeIcon
                      style={{ marginLeft: "45%" }}
                      icon={faTimes}
                      color="red"
                      size="lg"
                    />
                  )}
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

export default Users;
