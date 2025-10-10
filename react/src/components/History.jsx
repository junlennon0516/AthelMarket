import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './History.css'; 
import './font.css';

function History() {
    const [activeTab, setActiveTab] = useState(1);

    const historyData = {
        1: {
            title: "1차 에셀 마켓",
            date: "2022년",
            description: "첫 번째 에셀 마켓의 시작. 시흥순복음교회에서 처음으로 열린 특별한 마켓의 순간들입니다.",
            highlights: ["첫 에셀 마켓 개최", "지역사회와의 만남", "신앙과 문화의 조화"],
            image: "/api/placeholder/600/400"
        },
        2: {
            title: "2차 에셀 마켓", 
            date: "2023년",
            description: "더욱 풍성해진 두 번째 에셀 마켓. 다양한 부스와 참여자들이 만들어낸 따뜻한 이야기들입니다.",
            highlights: ["부스 규모 확대", "참여자 증가", "지역사회 연대 강화"],
            image: "/api/placeholder/600/400"
        },
        3: {
            title: "3차 에셀 마켓",
            date: "2024년", 
            description: "세 번째 에셀 마켓에서 새로운 도전과 성장을 이뤄낸 특별한 순간들을 소개합니다.",
            highlights: ["새로운 프로그램 도입", "디지털 마켓 연계", "지속가능한 마켓 문화"],
            image: "/api/placeholder/600/400"
        }
    };

    return (
        <div className="history-container">
            {/* 헤더 */}
            <header className="history-header">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                    </svg>
                </Link>
                <h1 className="history-header-title noto-sans-kr-bold">지난 에셀 마켓</h1>
                <div className="header-spacer"></div>
            </header>

            {/* 탭 네비게이션 */}
            <div className="history-tabs noto-sans-kr-medium">
                <button 
                    className={`tab-button ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => setActiveTab(1)}
                >
                    1차 에셀 마켓
                </button>
                <button 
                    className={`tab-button ${activeTab === 2 ? 'active' : ''}`}
                    onClick={() => setActiveTab(2)}
                >
                    2차 에셀 마켓
                </button>
                <button 
                    className={`tab-button ${activeTab === 3 ? 'active' : ''}`}
                    onClick={() => setActiveTab(3)}
                >
                    3차 에셀 마켓
                </button>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="history-content">
                <div className="history-section">
                    <div className="history-image-container">
                        <img 
                            src={historyData[activeTab].image} 
                            alt={historyData[activeTab].title}
                            className="history-image"
                        />
                        <div className="image-overlay">
                            <span className="history-date noto-sans-kr-medium">{historyData[activeTab].date}</span>
                        </div>
                    </div>
                    
                    <div className="history-text-container">
                        <h2 className="history-title noto-sans-kr-bold">{historyData[activeTab].title}</h2>
                        <p className="history-description noto-sans-kr-medium">{historyData[activeTab].description}</p>
                        
                        <div className="history-highlights">
                            <h3 className="noto-sans-kr-bold">주요 특징</h3>
                            <ul>
                                {historyData[activeTab].highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
