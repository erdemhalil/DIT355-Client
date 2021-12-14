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

  <Button className='loginButtons' variant="primary" type="submit">
    Create
  </Button>

</Form>
</div>
        </>
    )
}