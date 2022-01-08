import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
import Form from 'react-bootstrap/Form'
import NavBar from '../sharedContent'
import mqtt from '../mqtt'

export default function Login() {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  const login = () => {
    let result = mqtt("post", "/users/token/", user)
    setTimeout(() => {
      try {
        if (result[0].data.status === "200 OK") {
          localStorage.setItem('access_token', result[0].data.data.access);
          window.location.href = "/profile";
        } else {
          alert("Wrong credentials")
        }
        console.log(result, user)
      } catch (error) {
        console.log(error)
        alert("Something went wrong, please try again later.")
      }
    }, 500);
  }

  return (
    <>
      <NavBar />
      <div class="profile">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" placeholder="Password" />
          </Form.Group>
          <p id="signUpText">Create an account through signing up</p>
          <Button className='loginButtons' variant="primary" type="button" onClick={login}>
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
