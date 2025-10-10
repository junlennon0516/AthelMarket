import React from 'react';
import { Link } from 'react-router-dom';
import './Vision.css';
import './font.css';

function Vision() {
    return (
        <div className="vision-container">
            {/* 헤더 */}
            <header className="vision-header">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                    </svg>
                </Link>
                <h1 className="vision-header-title noto-sans-kr-bold">에셀 비전</h1>
                <div className="header-spacer"></div>
            </header>

            {/* 메인 콘텐츠 */}
            <div className="vision-content">
                <div className="vision-text">
                    <p>에셀 마켓의 비전과 목표를 소개합니다.</p>
                    <p>우리는 더 나은 미래를 만들어갑니다.</p>
                </div>
            </div>
        </div>
    );
}

export default Vision;
