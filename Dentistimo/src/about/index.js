import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import NavBar from '../sharedContent'

export default function About() {
    return (
        <>
            <NavBar />
            <div class="aboutText">
                <h1>About us</h1>
                <p>This is the frontend for a project created for the DIT355 course that is part of the Software Engineering and Management Bachelor's Programme at the University of Gothenburg.
                    <br></br>This project was created by Anis Bourbia, Cuong Darma Le Manh, Erdem Halil, Vlad Liteanu, and Taofik Arnouk during the autumn term of 2021. </p>
            </div>
        </>
    )
}
