import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


//import homepagePicture from './public/images/Bryanstondentist_6.png/';

export default function Profile() {

    return (
        <>
  
<Navbar bg="primary" variant="light">
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

      <Image src="/assets/me.png" roundedCircle />

    <div class = "profileContent">
        <h2 id="profileTtle">Appointments:</h2>
        <div class="profileContainer">
            <p class = "containerTitles">Past:</p>
        </div>

        <div class="profileContainer">
            <p class = "containerTitles">Future:</p>
        </div>
    </div>
        </>
    )
}