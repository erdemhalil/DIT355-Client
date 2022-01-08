import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css';
import NavBar from '../sharedContent';

export default function Home() {
  return (
    <>
      <NavBar />
      <div>
        <img class="darker" src="/assets/Bryanstondentist_6.png" />
        <div className="homeText"> Your dentist, <br /> Hello there... </div>
        <a href="http://localhost:3001/map/"><Button variant="primary" className="homeButton" >Book NOW!</Button></a>
      </div>
    </>
  )
}
