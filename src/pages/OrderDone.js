import React from 'react'
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom"

const OrderDone = () => {
  return (
    <div>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center shipping-header"
      >
        <span className="header-title">PLACE ORDER</span>
      </Container>
      <div className="text-center mt-5">
        <h1>Thanks for your order.</h1>
        <Link to="/"> Continue Shopping</Link>
      </div>
    </div>
  )
}

export default OrderDone
