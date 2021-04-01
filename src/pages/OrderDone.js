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
      <div style={{minHeight:"400px"}} className="text-center mt-5">
        <h1 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "29px",
                textAlign: "center",
                marginTop: "200px",
              }}>Thanks for your order.</h1>
                <Link style={{fontFamily:"'EB Garamond', serif",letterSpacing:"0.15em",fontSize:"17px"}} to="/"> Continue Shopping </Link>
        
      </div>
    </div>
  )
}

export default OrderDone
