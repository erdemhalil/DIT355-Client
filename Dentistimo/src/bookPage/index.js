import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
//import DatePicker from 'sassy-datepicker';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Home() {

    
    return (
        <>
  

<Navbar bg="primary" variant="light" >
    <Container className= "navbarPosition">
    <Navbar.Brand className= "navbarText" href="/">Dentistmo</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="">Locations</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>

      <img class= "logo"src="/assets/logo.png"/>

    </Nav>
    </Container>
  </Navbar>
        <div>
            <h3 class= "bookPagetitle">Calender and time table </h3>
        </div>

        </>
    )
}
