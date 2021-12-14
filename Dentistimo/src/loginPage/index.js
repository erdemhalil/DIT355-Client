import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import NavBar from '../sharedContent'

//import homepagePicture from './public/images/Bryanstondentist_6.png/';

export default function Login() {

    return (
        <>
<NavBar/>  

<div class="profile">
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address:</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
<p id= "signUpText">Create an account through signing up</p>
  <Button className='loginButtons' variant="primary" type="submit">
    Login
  </Button>
  <Link to="/signUpPage"><Button className='loginButtons' variant="primary" type="submit">
    Sign up
  </Button>
  </Link>
</Form>
</div>
        </>
    )
}