import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
    KeyboardDatePicker,
} from '@material-ui/pickers'
import TextField from '@mui/material/TextField';
import mqtt from '../mqtt'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import Stack from '@mui/material/Stack';

export default function BookPage(props) {
    let { id } = useParams();


    const [bookings, setBookings] = useState([])
    const [newBooking, setNewBooking] = useState({
        "Authorization": localStorage.getItem("access_token"),
        date: new Date('2021-01-01T12:00:00.000Z'),
        dentist: id,
    })

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({"Authorization": localStorage.getItem("access_token")})
    useEffect(() => {
        let result = mqtt("get", `/appointments/detail/${id}/`, data)
        setTimeout(() => {
            setBookings(result[0].data)
            console.log(result)
            setLoading(false)
        }, 500); 
    },[])
    
    const sendBooking = () => {
        let result = mqtt("post", "/appointments/", newBooking)
        setTimeout(() => {
          if (result[0].data.status === "201 Created") {
            window.location.replace(`http://localhost:3000/profile/`);
          }
          console.log(result)
        }, 500);
      }

    console.log(newBooking)
    
    if (loading) {
        return <p>Data is loading...</p>;
    }

    return (
        <>
          <NavBar/>

        <div>
            <h3 class= "bookPagetitle">Calender and time table</h3>
        </div>

        <div class="datePicker">
            <MuiPickersUtilsProvider utils= {DateFnsUtils}>
                <Grid container direction="column" alignItems="center" justifyContent="center" spacing={1}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <DesktopDateTimePicker
                            value={newBooking.date}
                            onChange={(newValue) => {
                                setNewBooking({...newBooking, date: newValue});
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                     </LocalizationProvider>
                    </Grid>
                <Grid item xs={12}><TextField id="filled-basic" label="Description" variant="outlined" onChange={(e) => {setNewBooking({...newBooking, description: e.target.value})}}/></Grid>
                <Grid item xs={12}><Button onClick={sendBooking}>Book time</Button></Grid>

                <Grid item xs={8} className="booked-times">
                    <h4>All booked times</h4>
                    <table>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                    { bookings.length > 0 ?
                    bookings.map((booking) => {
                        return (
                        <>
                        <tr>                        
                            <td>{booking.date.slice(0,16).replace('T', " at ")}</td>
                            <td id="padding-left">{booking.description}</td>
                        </tr>
                        </>
                    )
                    }) : null
                     }
                    </tr>
                    </table>
                </Grid>
                </Grid> 
            </MuiPickersUtilsProvider>
        </div>

        </>
    )
}
