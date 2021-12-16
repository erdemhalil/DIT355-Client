/* eslint-disable no-unused-expressions */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
import mqtt from '../mqtt'
import NavBar from '../sharedContent'

//import homepagePicture from './public/images/Bryanstondentist_6.png/';

export default function Home() {
  useEffect(() => {
    let data = {
      "name": "Your Dentist",
      "owner": "Dan Tist",
      "dentists": 3,
      "address": "Spannmålsgatan 20",
      "city": "Gothenburg",
      "coordinate": {
        "longitude": 11.969388,
        "latitude": 57.707619
      },
      "openinghours": {
        "monday": "9:00-17:00",
        "tuesday": "8:00-17:00",
        "wednesday": "7:00-16:00",
        "thursday": "9:00-17:00",
        "friday": "9:00-15:00"
      }
    }
    let a = mqtt("get", "/dentists/list/", "")
    console.log(a)
  })
  
  return (
    <>
      <NavBar />

      <div>
        <img class="darker" src="/assets/Bryanstondentist_6.png" />
        <div className="homeText"> Your dentist, <br /> Hello there... </div>
        <Link to="/bookPage"><Button variant="primary" class="homeButton" >Book NOW!</Button></Link>
      </div>
    </>
  )
}
