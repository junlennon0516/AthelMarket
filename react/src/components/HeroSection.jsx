import React, { useState, useEffect } from "react";
import DDay from "./DDay";
import { Link } from "react-router-dom";
import './HeroSection.css';
import './font.css';

// 이미지 import
import main1 from '../assets/poster/poster-4.png';
import main2 from '../assets/poster/poster-animal.png';

function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [main1, main2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // 3초마다 이미지 변경

        return () => clearInterval(interval);
    }, [images.length]);

    return(
        <>
            <section className="hero-section">
                {/* 배경 이미지들을 겹쳐서 배치 */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
                        style={{
                            backgroundImage: `url(${image})`,
                            opacity: index === currentImageIndex ? 1 : 0
                        }}
                    />
                ))}
                {/* 메인 타이틀 영역 */}
                {/* 
                <div className="hero-text-content">
                    <h1 className="main-title noto-sans-kr-bold">
                        <span className="sub-title noto-sans-kr-medium">제 4차</span><br/>
                        에셀 마켓
                    </h1>
                    <p className="date-location noto-sans-kr-semi-bold">
                        2025.10.25(토) <br/>오후 02:00~05:30
                    </p>
                </div>
                */}
            </section>
            
            {/* D-day 카운터와 에셀마켓 안내 버튼 영역 - 사진 아래로 이동 */}
            <div className="dday-wrapper">
                <div className="dday-label-container">
                    <p className="dday-label noto-sans-kr-bold">D-day</p>
                    <p className="date-label noto-sans-kr-bold">2025.10.25(토)</p>
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