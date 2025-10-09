import React from 'react';
import { Link } from 'react-router-dom';
import './History.css';

function History() {
    return (
        <div className="history-container">
            {/* 헤더 */}
            <header className="history-header">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                    </svg>
                </Link>
                <h1 className="history-header-title">지난 에셀 마켓</h1>
                <div className="header-spacer"></div>
            </header>

            {/* 메인 콘텐츠 */}
            <div className="history-content">
                <div className="history-text">
                    <h2>2024 에셀 마켓</h2>
                    <p>지난해 열렸던 에셀 마켓의 모습을 소개합니다.</p>
                    <p>많은 학생들이 참여하여 성공적으로 진행되었습니다.</p>
                    
                    <div className="history-stats">
                        <div className="stat-item">
                            <h3>참여 부스</h3>
                            <p>50+ 개</p>
                        </div>
                        <div className="stat-item">
                            <h3>참여 학생</h3>
                            <p>500+ 명</p>
                        </div>
                        <div className="stat-item">
                            <h3>행사 기간</h3>
                            <p>3일간</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
