import React from "react";
import './Footer.css';
import sfgcLogo from '../assets/sfgc-logo.png';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-logo-area">
                <img src={sfgcLogo} alt="SFGC Logo" className="footer-logo" />
            </div>

            <hr className="footer-division" />
            
            <div className="footer-info-area">
                <p className="footer-text copyright noto-sans-kr-medium">
                    Copyright © 2025 시흥순복음교회. All Rights Reserved.
                </p>
                <p className="footer-text">
                    문의: T.031-317-5017
                </p>
                <p className="footer-text noto-sans-kr-regular">
                    경기도 시흥시 시청로 78 시흥순복음교회
                </p>
            </div>
        </footer>
    );
}

export default Footer;