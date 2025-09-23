import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./images/Motorcycle-logo.png";
import bikeimg from "./images/header-bike.png";


function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header id="#home">
            <nav className="nav-bar">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="hamburger" onClick={() => setOpen(!open)}>
                    {open ? "X" : "☰"}
                </div>
                <div className= {`nav-links ${open ? "active" : ""}`}>
                    <ul> 
                        <li><a href="#home">Home</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#faq">FAQs</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li className="login-btn"><a href="/">Login</a></li>
                    </ul>
                </div>
            </nav>
            <hr/>
            <div class="body">
                <div class="body-description">
                    <span>Computer-controlled digital transistorized with electronic advance</span>
                    <h1 class="body-head">Honda CBR 300R</h1>
                    <p class="body-text">
                        If you’ve got a soft spot for sportbike design and Grand Prix
                        stylings, then the 2025 Honda CBR300R is your sweet spot between
                        form and function. It’s narrow, light, and a total blast to ride
                        around town and on twisty back roads.
                    </p>
                    <a href="/">Purchase</a>
                </div>
                <div className="body-img">
                    <img src={bikeimg} alt="bikeimg" />
                </div>
            </div>
        </header>

    )
}

export default Navbar