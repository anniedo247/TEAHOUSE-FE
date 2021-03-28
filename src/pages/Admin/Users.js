import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import userActions from "../../redux/actions/user.actions";
const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(userActions.getAllUsers());
  }, []);
  return (
    <Container fluid className="py-5" style={{width: "70%"}}>
      <h2>USERS</h2>
      <Table bordered hover className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody>
            <tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td> {user.email}</td>
              <td >
                {user.role === "admin" ? (
                  <FontAwesomeIcon style={{marginLeft:"45%"}} icon={faCheck} color="green" size="lg" />
                ) : (
                  <FontAwesomeIcon style={{marginLeft:"45%"}} icon={faTimes} color="red" size="lg" />
                )}
              </td>
              <td><button style={{marginLeft:"20%"}} className ="order-detail-button">View</button></td>
              <td>
                <FontAwesomeIcon style={{marginLeft:"35%"}} icon={faTrashAlt} color="red" size="md" />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default Users;
