import React from "react";
import './Footer.css';
import sfgcLogo from '../assets/sfgc-logo.png';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-logo-area">
                <img src={sfgcLogo} alt="SFGC Logo" className="footer-logo" />
            </div>

            <hr className="footer-divider" />
            
            <div className="footer-info-area">
                <p className="footer-text copyright noto-sans-kr-medium">
                    Copyright © 2025 시흥순복음교회. All Rights Reserved.
                </p>
                <p className="footer-text">
                    문의: 
                </p>
                <p className="footer-text noto-sans-kr-regular">
                    경기 시흥시 장현순환로 51 / 경기 시흥시 장현동 357-6 에셀센터
                </p>
            </div>
        </footer>
    );
}

export default Footer;