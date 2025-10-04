import React from "react";
import DDayCounter from "./DDayCounter";
import './HeroSection.css';

function HeroSection() {
    return(
        <section className="hero-section">
            {/* 메인 타이틀 영역 */}
            <div className="hero-text-content">
                <h1 className="main-title">
                    Ethel Market
                </h1>
                <p className="date-location">
                    2025.10.25
                </p>
            </div>
            
            {/* D-day 카운터 영역 */}
            <div className="dday-wrapper">
                <p className="dday-label">D-day</p>
                <DDayCounter/>
            </div>
        </section>
    );
}

export default HeroSection;