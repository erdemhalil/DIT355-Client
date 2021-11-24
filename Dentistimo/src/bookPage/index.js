import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './index.css'
//import DatePicker from 'sassy-datepicker';

export default function Home() {

    
    return (
        <>
  
<div className ="backgroundColor">

        <div className ="buttonList">

        <ButtonGroup aria-label="Basic example">
            <Link to="/"> <Button variant="secondary">Home</Button></Link>
            <Link to="/profile"><Button variant="secondary">Profile</Button></Link>
            <Button variant="secondary">Locations</Button>
            <Link to="/about"> <Button variant="secondary">About</Button></Link>
        </ButtonGroup>

        <img class= "logo"src="/assets/logo.png"/>
 
        </div>
        <div>
            <h3>Calender and time table </h3>
        </div>

</div>
        </>
    )
}
