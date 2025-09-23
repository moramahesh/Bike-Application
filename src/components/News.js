import React from "react";
import { Link } from "react-router-dom";
import card1img from'./images/bike-1.png';
import card2img from './images/bike-2.png';
import card3img from './images/bike-3.png';
import './News.css'


function LatestNews(){

    return (
        <section class="latestNews" id="news">
            <div class="news-head">
                <h1>Latest <span>News</span></h1>
            </div>
            <div class="container">
                <div class="card">
                    <article>
                        <img src={card1img} alt="img" />
                        <div>
                        <h5>Ducati XDIAVEL S-73</h5>
                        <p>
                            XDiavel, the Ducati cruiser that combines the best of both
                            worlds, is renewed, still remaining true to its philosophy.
                        </p>
                        <Link to="#">Read More</Link>
                        </div>
                    </article>
                </div>            
                <div class="card">
                    <article>
                        <img src={card2img} alt="img" />
                        <div>
                        <h5>Motorcycles & Scooters</h5>
                        <p>
                            Buy Motorcycles & Scooters and get the best deals at the lowest
                            prices on Our Store! Great Savings & Free Delivery on many
                            items.
                        </p>
                        <Link to="#">Read More</Link>
                        </div>
                    </article>
                </div>
                <div class="card">
                    <article>
                        <img src={card3img} alt="img" />
                        <div>
                        <h5>2025 Honda CBR500R</h5>
                        <p>
                            2025 CBR500R ABS OVERVIEW - Honda Is it any wonder why the Honda
                            CBR500R is one of our most popular sport bikes?
                        </p>
                        <Link to="#">Read More</Link>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default LatestNews