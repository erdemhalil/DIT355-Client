import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Image from 'react-bootstrap/Image'
import NavBar from '../sharedContent'
import mqtt from '../mqtt'

export default function Profile() {
    const [bookings, setBookings] = useState()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({ "Authorization": localStorage.getItem("access_token") })

    if(localStorage.getItem("access_token") === null){
        alert("Please login first.")
        window.location.replace(`http://localhost:3000/loginPage`);
    }

    useEffect(() => {
        let result = mqtt("get", "/appointments/list/user/", data)
        setTimeout(() => {
            try {
                setBookings(result[0].data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                alert("Something went wrong, please try again later.")
                window.location.replace(`http://localhost:3000/`);
            }
        }, 500);
    }, [])

    if (loading) {
        return <p>Data is loading...</p>;
    }

    return (
        <>
            <NavBar />
            <Image src="/assets/me.png" roundedCircle />
            <div class="profileContent">
                <h2 id="profileTtle">Appointments:</h2>
                {
                    bookings.map((booking) => {
                        return (
                            <>
                                <ul>
                                    <li>{booking.dentist.name} {booking.date.slice(0, 16).replace('T', " at ")}</li>
                                </ul>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
