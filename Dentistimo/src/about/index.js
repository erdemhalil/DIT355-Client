import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

//import homepagePicture from './public/images/Bryanstondentist_6.png/';

export default function Profile() {

    return (
        <>
  
<div className ="backgroundColor">

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

    <div class = "aboutText">
        <h1>About us</h1>
        <p>Consulted he eagerness unfeeling deficient existence of. Calling nothing end fertile for venture way boy. 
            Esteem spirit temper too say adieus who direct esteem. It esteems luckily mr or picture placing drawing no. 
            Apartments frequently or motionless on reasonable projecting expression. Way mrs end gave tall walk fact bed.</p>
        <p>Attention he extremity unwilling on otherwise. Conviction up partiality as delightful is discovered. Yet jennings 
            resolved disposed exertion you off. Left did fond drew fat head poor. So if he into shot half many long. China fully
             him every fat was world grave.</p>
        <p>Greatly cottage thought fortune no mention he. Of mr certainty arranging am smallness by conveying. Him plate you allow 
            built grave. Sigh sang nay sex high yet door game. She dissimilar was favourable unreserved nay expression contrasted saw.
             Past her find she like bore pain open. Shy lose need eyes son not shot. Jennings removing are his eat dashwood. Middleton as 
             pretended listening he smallness perceived. 
            Now his but two green spoil drift.</p>
        <p>Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket 
            ladies window expect. Supply as so period it enough income he genius. Themselves acceptance bed sympathize get dissimilar way 
            admiration son. Design for are edward regret met lovers. This are calm case roof and.</p>   
    </div>
</div>
        </>
    )
}