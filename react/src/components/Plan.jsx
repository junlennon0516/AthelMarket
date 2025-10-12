import React from 'react';
import { Link } from 'react-router-dom';
import './Plan.css';
import './font.css';

function Plan() {
    return (
        <div className="plan-container">
            {/* 헤더 */}
            <header className="plan-header">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                    </svg>
                </Link>
                <h1 className="plan-header-title noto-sans-kr-bold">행사 계획</h1>
                <div className="header-spacer"></div>
            </header>

            {/* 메인 콘텐츠 */}
            <div className="plan-content">
                <div className="plan-text">
                    <p>에셀 마켓의 행사 계획을 소개합니다.</p>
                    <h1>준비 중</h1>
                </div>
            </div>
        </div>
    );
}

export default Plan;
