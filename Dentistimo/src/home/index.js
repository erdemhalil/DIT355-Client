
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css';
import NavBar from '../sharedContent'
//import homepagePicture from './public/images/Bryanstondentist_6.png/';

export default function Home() {

    return (
        <>
         <NavBar/>

        <div>
          <img class= "darker" src="/assets/Bryanstondentist_6.png"/>

          <div className = "homeText"> Your dentist, <br/> Hello there... </div>
          
          <Link to="/bookPage"><Button variant="primary" class="homeButton" >Book NOW!</Button></Link>
          
        </div>

        </>
    )
}
