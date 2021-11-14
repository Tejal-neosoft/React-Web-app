import React from 'react'
import {Navbar,Container, NavbarBrand,Nav,NavLink} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Navv.css'
function Navv() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavbarBrand style={{letterSpacing:'1px'}}>React-App</NavbarBrand>
          <Nav className="me-auto">
          <NavLink><Link to="/products" className="line">Products</Link></NavLink> &nbsp;&nbsp;
          <NavLink><Link to="/courses"  className="line">Courses</Link></NavLink> &nbsp;&nbsp;
          <NavLink><Link to="/display"  className="line">Display-Enquiry</Link></NavLink> &nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Navv
