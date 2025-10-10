import React from "react";
import DDay from "./DDay";
import { Link } from "react-router-dom";
import './HeroSection.css';
import './font.css';

function HeroSection() {
    return(
        <section className="hero-section">
            {/* 메인 타이틀 영역 */}
            <div className="hero-text-content">
                <p className="sub-title noto-sans-kr-medium">
                    제 4차
                </p>
                <h1 className="main-title noto-sans-kr-bold">
                     에셀 마켓
                </h1>
                <p className="date-location noto-sans-kr-medium">
                    2025.10.25(토)
                </p>
            </div>
            
            {/* D-day 카운터와 에셀마켓 안내 버튼 영역 */}
            <div className="dday-wrapper">
                <div className="dday-label-container">
                    <p className="dday-label noto-sans-kr-bold">D-day</p>
                </div>
                <div className="dday-container">
                    <DDay/>
                    <Link to="/marketfour" className="market-info-button-hero">
                        <span className="button-text noto-sans-kr-bold">에셀 마켓 안내사항</span>
                        <span className="button-text-click noto-sans-kr-medium">click!</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;