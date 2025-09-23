import React from 'react';
import './about.css';
import aboutImg from './images/woman.png';

function About(){

    return(
        <section class="about"  id="about">
            <div class="about-head">
                <h1>About <span>Honda CBR</span>
                </h1>
                <p>About Honda Bike</p>
            </div>
            <div class="about-container">
                <div class="aboutImg">
                    <img src={aboutImg} alt="img" />
                </div>
                <div class="about-body">
                    <div class="row-1">
                        <ul>
                            <li class>
                                <h4>Many Types of Bikes</h4>
                                <p>
                                We can fit you with the perfect bike because we carry all
                                sizes and types of bikes.                  
                                </p>
                            </li>
                            <li>
                                <h4>Best Bikes in Town</h4>
                                <p>
                                Comfort. Safety. Our equipment is guaranteed to make your
                                biking experience 100% stree-free.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="row-2">
                        <ul>
                            <li>
                                <h4>Longest Opening Hours</h4>
                                <p>
                                Have all the time in the world? Rent for an entire day and
                                explore New York City at your leisure.
                                </p>
                            </li>
                            <li>
                                <h4>Rent Fully Insured</h4>
                                <p>
                                A simple bodily injury claim from a customer riding your bike
                                can derail your business.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;