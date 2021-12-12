import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
//import DatePicker from 'sassy-datepicker';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import{
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'

export default function Home() {

    const [selectedDate, setSelectedDate] = React.useState(
      new Date()
    )
    
    const handleDateChange = (date) => {
       setSelectedDate(date)
    }
    return (
        <>
  

<Navbar bg="primary" variant="light" >
    <Container className= "navbarPosition">
    <Navbar.Brand className= "navbarText" href="/">Dentistmo</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="">Locations</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>

      <img class= "logo"src="/assets/logo.png"/>

    </Nav>
    </Container>
  </Navbar>
        <div>
            <h3 class= "bookPagetitle">Calender and time table </h3>
        </div>

        <div class="datePicker">
            <MuiPickersUtilsProvider utils= {DateFnsUtils}>
                <Grid container justify='space-around'>
                    <KeyboardDatePicker
                    variant='dialog'
                    format= 'MM/dd/yyyy'
                    margin='normal'
                    id='date-picker'
                    label='Date Picker'
                    minDate={new Date()}
                    //filterDate={date => date.getDate() != 6 && date.getDay() != 0}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label':'change date'
                    }} 
                    />

                    <KeyboardTimePicker
                    margin='normal'
                    id='time-picker'
                    label="Time Picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label':'change date'
                    }} 
                    />
                </Grid> 
            </MuiPickersUtilsProvider>
        </div>

        </>
    )
}
