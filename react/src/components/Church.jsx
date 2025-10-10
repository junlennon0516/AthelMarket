import React from 'react';
import { Link } from 'react-router-dom';
import './Church.css';
import './font.css';

function Church() {
    return (
        <div className="church-container">
            {/* 헤더 */}
            <header className="church-header">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                    </svg>
                </Link>
                <h1 className="church-header-title noto-sans-kr-bold">교회 소개</h1>
                <div className="header-spacer"></div>
            </header>

            {/* 메인 콘텐츠 */}
            <div className="church-content">
                <div className="church-text">
                    <p>시흥순복음교회에 대해 소개합니다.</p>
                    <p>우리의 교회</p>
                </div>
            </div>
        </div>
    );
}

export default Church;
