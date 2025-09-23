import React, { useState } from "react";
import "./shop.css";
import pulsar from "./images/pulsar.png";
import pulsarNs400z from "./images/pulser Ns400Z.png";
import r15m from "./images/r15m.webp";

function NewModel() {
    const bikes = [pulsar, pulsarNs400z, r15m];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevBike = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? bikes.length - 1 : prev - 1);
    };

    const nextBike = () => {
        setCurrentIndex((prev) =>
            prev === bikes.length - 1 ? 0 : prev + 1);
    };
    return (
        <section id="shop" className="new-model">
            <div className="section1">
                <div class="head-text">
                    <h1>Featured Bikes <span>2025</span></h1>
                    <p>Best bike collection</p>
                </div>
                <div className="section-box">
                    <button className="btn prev" onClick={prevBike}>◁</button>
                    <div class="section-img">
                        <img src={bikes[currentIndex]} alt="bike" className="bike-img"/>
                    </div>
                    <button className="btn next" onClick={nextBike}>▷</button>
                </div>
            </div>
        </section>
    )
}

export default NewModel