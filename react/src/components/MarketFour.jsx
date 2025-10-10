import React from 'react';
import { Link } from 'react-router-dom';
import './MarketFour.css';
import './font.css';

function MarketFour() {
    return (
        <div className="marketfour-container">
            {/* 헤더 */}
            <header className="marketfour-header">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                    </svg>
                </Link>
                <h1 className="marketfour-header-title noto-sans-kr-bold">제 4차 에셀 마켓</h1>
                <div className="header-spacer"></div>
            </header>

            {/* 메인 콘텐츠 */}
            <div className="marketfour-content">
                <div className="marketfour-text">
                    <p>제 4차 에셀 마켓의 안내를 소개합니다.</p>
                    <p>우리의 마켓</p>
                </div>
            </div>
        </div>
    );
}

export default MarketFour;
