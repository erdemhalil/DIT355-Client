
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
//import homepagePicture from './public/images/Bryanstondentist_6.png/';

export default function NavBar() {
  const logout = () => {
    localStorage.clear();
  }
  
  if (localStorage.getItem("access_token") === null) {
    return (
        <>
  
  
  <Navbar bg="primary" variant="light">
    <Container className= "navbarPosition">
    <Navbar.Brand className= "navbarText" href="/">Dentistmo</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="http://localhost:3001/map/">Locations</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/loginPage">Login</Nav.Link>
  
      <img class= "logo"src="/assets/logo.png"/>
  
    </Nav>
    </Container>
  </Navbar>
  
        </>
    )
  } else {
    return (
      <>
<Navbar bg="primary" variant="light">
  <Container className= "navbarPosition">
  <Navbar.Brand className= "navbarText" href="/">Dentistmo</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/profile">Profile</Nav.Link>
    <Nav.Link href="http://localhost:3001/map/">Locations</Nav.Link>
    <Nav.Link href="/about">About</Nav.Link>
    <Nav.Link href="/loginPage" onClick={logout}>Logout</Nav.Link>

    <img class= "logo"src="/assets/logo.png"/>

  </Nav>
  </Container>
</Navbar>
      </>
  )
  }

}
