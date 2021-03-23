import React from 'react'
import { Container } from 'react-bootstrap'

const NotFoundPage = () => {
  return (
    <div>
      <Container className="text-center" style={{width:"50%"}}>
        <span style={{fontSize:"120px",color:"#98a86d"}}>404</span>
        <hr/>
        <h3>PAGE YOU ARE LOOKING IS NOT FOUND</h3>
        <p>The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return back to the site's homepage and see if you can find what you are looking for.

</p>
      </Container>
    </div>
  )
}

export default NotFoundPage
