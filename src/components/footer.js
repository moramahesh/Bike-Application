import React from "react";
import './footer.css';
import footerImg from './images/download.png';

function Footer(){

    return(
        <footer>
            <div class="footer-container">
                <div class="footer-body">
                    <p>Download Now <span>License</span></p>
                    <div class="footer-other">
                        <span>About</span>
                        <span>Features</span>
                        <span>Pricing</span>
                        <span>Careers</span>
                        <span>Help</span>
                        <span>Privacy Policy</span>
                    </div>
                    <div>
                        <p class="footer-text">&copy; 2025 bike. All rights reserved</p>
                    </div>
                </div>
                <div>
                    <img src={footerImg} alt="App Store"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;