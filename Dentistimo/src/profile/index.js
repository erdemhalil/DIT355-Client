import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './index.css'
import Image from 'react-bootstrap/Image'


//import homepagePicture from './public/images/Bryanstondentist_6.png/';

export default function Profile() {

    return (
        <>
  
<div className ="backgroundColor">

        <div className ="buttonList">

        <ButtonGroup aria-label="Basic example">
        <Link to="/"> <Button variant="secondary">Home</Button></Link>
        <Button variant="secondary">Profile</Button>
        <Button variant="secondary">Locations</Button>
        <Link to="/about"> <Button variant="secondary">About</Button></Link>
        </ButtonGroup>

        <img class= "logo"src="/assets/logo.png"/>
        </div>

      <Image src="/assets/me.png" roundedCircle />

    <div class = "profileContent">
        <h2>Appointments</h2>
        <div class="profileContainer">
            <p class = "containerTitles">Past:</p>
        </div>

        <div class="profileContainer">
            <p class = "containerTitles">Future:</p>
        </div>
    </div>
</div>
        </>
    )
}