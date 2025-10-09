import React from "react";
import DDayCounter from "./DDayCounter";
import './HeroSection.css';

function HeroSection() {
    return(
        <section className="hero-section">
            {/* 메인 타이틀 영역 */}
            <div className="hero-text-content">
                <p className="sub-title">
                    제 4차
                </p>
                <h1 className="main-title">
                     에셀 마켓
                </h1>
                <p className="date-location">
                    2025.10.25(토)
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