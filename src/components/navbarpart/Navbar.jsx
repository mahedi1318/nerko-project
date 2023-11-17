import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../../assets/styles/navbar.css"
import "../../assets/styles/responsive.css"

const Navbars = () => {
  return (
    <Navbar className='nav_part'>
    <Container>
      <Navbar.Brand className='logo' href="#home">
        <h3>NERKO</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link className='nav_list' to="/">Home</Link>
          <Link className='nav_list' to="/minting">Minting</Link>
          <Link className='nav_list' to="/about">About</Link>
          <Link className='nav_list' to="/collection">Collection</Link>
          <Link className='nav_list' to="/roadmap">RoadMap</Link>
          <Link className='nav_list' to="/blog">Blog</Link>
          
        </Nav>
      </Navbar.Collapse>
      <div>
          <button className='nab_btn'>Connect wallet</button>
      </div>
    </Container>
  </Navbar>
  )
}

export default Navbars