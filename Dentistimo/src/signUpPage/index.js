import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import NavBar from '../sharedContent'
import mqtt from '../mqtt'

//import homepagePicture from './public/images/Bryanstondentist_6.png/';

export default function Login() {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

const signup = () => {
  let result = mqtt("post", "/users/register/", user)
  setTimeout(() => {
    if (result[0].data.status === "201 Created") {
      window.location.href = "/loginPage";
    }
  }, 500);
}

    return (
        <>
        
<NavBar/>  

<div class="profile">
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address:</Form.Label>
    <Form.Control onChange={(e) => setUser({...user, email: e.target.value})} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control onChange={(e) => setUser({...user, password: e.target.value})} type="password" placeholder="Password" />
  </Form.Group>

  <Button className='loginButtons' variant="primary" type="button" onClick={signup}>
    Create
  </Button>

</Form>
</div>
        </>
    )
}