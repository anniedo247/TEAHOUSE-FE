import React from 'react';
import {Container} from "react-bootstrap"

import SideMenu from "../../components/SideMenu"

const UserInfo = () => {
  return (
    <div>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center user-header"
      >
        <span className="header-title">MY ACCOUNT</span>
      </Container>
      <SideMenu/>
    </div>
  )
}

export default UserInfo
