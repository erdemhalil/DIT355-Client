import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
import NavBar from '../sharedContent'
//import DatePicker from 'sassy-datepicker';
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import{
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'


export default function BookPage() {

    const [selectedDate, setSelectedDate] = React.useState(
      new Date()
    )
    
    const handleDateChange = (date) => {
       setSelectedDate(date)
    }
    return (
        <>
          <NavBar/>

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
