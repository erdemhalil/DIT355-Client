import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
import NavBar from '../sharedContent'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import TextField from '@mui/material/TextField';
import mqtt from '../mqtt'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import Stack from '@mui/material/Stack';

export default function BookPage(props) {
    let { id } = useParams();
    const [timesTaken, setTimesTaken] = useState([])

    const [bookings, setBookings] = useState([])
    const [newBooking, setNewBooking] = useState({
        "Authorization": localStorage.getItem("access_token"),
        date: new Date('2021-01-01T12:00:00.000Z'),
        dentist: id,
    })

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({ "Authorization": localStorage.getItem("access_token") })
    let dentist = mqtt("get", `/dentists/detail/${id}/`, data)
    useEffect(() => {
        let result = mqtt("get", `/appointments/detail/${id}/`, data)
        setTimeout(() => {
            try {
                setBookings(result[0].data)
                setLoading(false)
                setTimesTaken(dentist[0].data.openinghours.timestaken.split("."))
            } catch (error) {
                console.log(error)
                alert("Something went wrong, please try again later!")
                window.location.replace(`http://localhost:3000/`);
            }
        }, 500);
    }, [])

    const sendBooking = () => {
        try {
            let book = newBooking
            let day = book.date.toLocaleDateString('en-US', { weekday: 'long' });
            if (book.date.getDay() > 0 && book.date.getDay() <= 5) {
                let valid = true
                setTimeout(() => {
                    String(dentist[0].data.openinghours.timestaken).split('.').forEach(days => {
                        if (days.includes(day) && days.includes(String(book.date).split(' ')[4].split(':', 2).join(':'))) {
                            valid = false
                            alert("The dentist is on break during that time. Please choose another time.")
                        }
                    })
                    delete dentist[0].data.openinghours["timestaken"]
                    delete dentist[0].data.openinghours["id"]
                    for (var key in dentist[0].data.openinghours) {
                        let start = parseInt(dentist[0].data.openinghours[key].split('-')[0].split(':')[0])
                        let end = parseInt(dentist[0].data.openinghours[key].split('-')[1].split(':')[0])
                        let chosenTime = parseInt(String(book.date).split(' ')[4].split(':', 1).join())
                        if (day.toLowerCase() === key.toLowerCase() && (chosenTime < start || chosenTime > end)) {
                            valid = false
                            return alert("Outside opening hours. Please choose another time.")
                        }
                    }
                    if (valid) {
                        let newDate
                        newDate = new Date(newBooking.date.getTime() + (60 * 60 * 1000))
                        newBooking.date = newDate
                        let result = mqtt("post", "/appointments/", newBooking)
                        setTimeout(() => {
                            try {
                                if (result[0].data.status === "201 Created") {
                                    window.location.replace(`http://localhost:3000/profile/`);
                                } else if (result[0].data.error === "401 Unauthorized") {
                                    alert("Please log in first!")
                                } else if (result[0].data.data.date[0] === "appointment with this date already exists.") {
                                    alert("That time is already taken. Please choose another time.")
                                }
                            } catch (error) {
                                alert(error)
                            }
                        }, 500);
                    }
                }, 500);
            } else {
                alert("Please choose a working weekday.")
            }
        } catch (error) {
            console.log(error)
            alert("Something went wrong, please try again later!")
        }
    }

    if (loading) {
        return <p>Data is loading...</p>;
    }

    return (
        <>
            <NavBar />
            <div>
                <h3 class="bookPagetitle">Calender and time table</h3>
            </div>
            <div class="datePicker">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={1}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={4}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={3}>
                                    <DesktopDateTimePicker
                                        value={newBooking.date}
                                        onChange={(newValue) => {
                                            setNewBooking({ ...newBooking, date: newValue });
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12}><TextField id="filled-basic" label="Description" variant="outlined" onChange={(e) => { setNewBooking({ ...newBooking, description: e.target.value }) }} /></Grid>
                        <Grid item xs={12}><Button onClick={sendBooking}>Book time</Button></Grid>
                        <Grid item xs={8} className="booked-times">
                            <h4>All booked times</h4>
                            <table>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                </tr>
                                <tr>
                                    {bookings.length > 0 ?
                                        bookings.map((booking) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{booking.date.slice(0, 16).replace('T', " at ")}</td>
                                                        <td id="padding-left">{booking.description}</td>
                                                    </tr>
                                                </>
                                            )
                                        }) : null
                                    }
                                </tr>
                            </table>
                        </Grid>
                        <Grid item xs={4} className="break-times">
                            <h4>Break times</h4>
                            {
                                timesTaken.map((times) => {
                                    return (
                                        <>
                                            <td>{times}</td>
                                        </>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>
        </>
    )
}
