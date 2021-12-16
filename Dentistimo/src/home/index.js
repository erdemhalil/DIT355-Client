/* eslint-disable no-unused-expressions */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
import Nav from 'react-bootstrap/Nav'
import NavBar from '../sharedContent'

//import homepagePicture from './public/images/Bryanstondentist_6.png/';

export default function Home() {
  const ws = new WebSocket("ws://localhost:8082");
  function generateId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  var id = generateId(30)
  useEffect(() => {
    ws.addEventListener('open', () => {
      let data = {
        "name": "Your Dentist",
        "owner": "Dan Tist",
        "dentists": 3,
        "address": "SpannmÃ¥lsgatan 20",
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
      ws.send(JSON.stringify({"id": id, "request": "post", "url": "/dentists/create/" ,"data": JSON.stringify(data)}));
      console.log("connected to ws", ws)
    })
    ws.addEventListener('message', event => {
      let message = JSON.parse(event.data)
      console.log('Message from server ', message)
      console.log(true)
    })
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
