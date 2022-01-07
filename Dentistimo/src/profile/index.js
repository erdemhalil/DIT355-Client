import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './index.css'
import Image from 'react-bootstrap/Image'
import NavBar from '../sharedContent'
import mqtt from '../mqtt'



//import homepagePicture from './public/images/Bryanstondentist_6.png/';

export default function Profile() {
    const [bookings, setBookings] = useState()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({"Authorization": localStorage.getItem("access_token")})

    useEffect(() => {
        let result = mqtt("get", "/appointments/list/", data)
        setTimeout(() => {
            setBookings(result[0].data)
            console.log(result)
            setLoading(false)
        }, 500); 
    },[])
    
    console.log(bookings)
    
    if (loading) {
        return <p>Data is loading...</p>;
        }

        return (
            <>
        <NavBar/>
    
          <Image src="/assets/me.png" roundedCircle />
    
        <div class = "profileContent">
            <h2 id="profileTtle">Appointments:</h2>
                {
                    bookings.map((booking) => {
      
                        return (
                        <>
                        <ul>       
                            <li>{booking.dentist.name} {booking.date.slice(0,16).replace('T', " at ")}</li>
                        </ul>
                        </>
                    )
                })
            }
        </div>
            </>
        )
        
    }


