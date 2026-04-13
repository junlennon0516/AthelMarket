import React from "react";
import DDay from "./DDay";
import { Link } from "react-router-dom";
import './HeroSection.css';
import './font.css';

// 이미지 import
import mainPoster from '../assets/poster/poster-2026-04.png';

function HeroSection() {
    return(
        <>
            <section className="hero-section">
                <img src={mainPoster} alt="에셀 마켓 메인 포스터" className="hero-poster-image" />
                {/* 메인 타이틀 영역 */}
                {/* 
                <div className="hero-text-content">
                    <h1 className="main-title noto-sans-kr-bold">
                        <span className="sub-title noto-sans-kr-medium">제 4차</span><br/>
                        에셀 마켓
                    </h1>
                    <p className="date-location noto-sans-kr-semi-bold">
                        2026.04.25(토) <br/>낮 12:30~저녁 6:00
                    </p>
                </div>
                */}
            </section>
            
            {/* D-day 카운터와 에셀마켓 안내 버튼 영역 - 사진 아래로 이동 */}
            <div className="dday-wrapper">
                <div className="dday-label-container">
                    <p className="dday-label noto-sans-kr-bold">D-day</p>
                    <p className="date-label noto-sans-kr-bold">2026.04.25(토)</p>
                </div>
                <div className="dday-container">
                    <DDay/>
                    <Link to="/marketfour" className="market-info-button-hero">
                        <span className="button-text noto-sans-kr-bold">에셀 마켓 안내사항</span>
                        <span className="button-text-click noto-sans-kr-medium">click!</span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HeroSection;