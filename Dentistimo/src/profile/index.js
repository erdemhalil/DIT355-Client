import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
import Image from 'react-bootstrap/Image'
import NavBar from '../sharedContent'



//import homepagePicture from './public/images/Bryanstondentist_6.png/';

export default function Profile() {

    return (
        <>
    <NavBar/>

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