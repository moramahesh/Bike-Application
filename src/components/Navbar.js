import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "./images/Motorcycle-logo.png";
import bikeimg from "./images/header-bike.png";
import profilepic from './images/profile.png';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // Show login modal
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Login status
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successMsg, setSuccessMsg] = useState("")

    const handleLogin = (e) => {
        e.preventDefault();
        // Hardcoded login
        if (username !== "" && password !== "") {
            setIsLoggedIn(true);
            setShowLogin(false);
            setSuccessMsg(`Login Successfull! Wellcome, ${username}`);
        } else {
            alert("Please enter both username and password");
        }
    };
    useEffect(() => {
        if (successMsg) {
            const timer = setTimeout(() => setSuccessMsg(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [successMsg])

    return (
        <header id="#home">
            <nav className="nav-bar">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="hamburger" onClick={() => setOpen(!open)}>
                    {open ? "X" : "☰"}
                </div>
                <div className={`nav-links ${open ? "active" : ""}`}>
                    <ul>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#faq">FAQs</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li>{!isLoggedIn ? (
                            <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>
                        ) : (
                            <img src={profilepic} alt="Profile" className="profile-pic-navbar" />
                        )}</li>
                    </ul>
                </div>
            </nav>
            {/* Login Modal */}
            {showLogin && !isLoggedIn && (
                <div className="login-modal">
                    <div className="login-content">
                        <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
                        <h2>Login</h2>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            )}
            {successMsg && (
                <div className="success-msg">
                    {successMsg}
                </div>
            )}
            <hr />
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