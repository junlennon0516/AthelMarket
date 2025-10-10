import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './History.css'; 
import './font.css';

// 이미지 import
import poster1 from '../assets/poster/poster-1.jpg';
import poster2 from '../assets/poster/poster-2.jpg';
import poster3 from '../assets/poster/poster-3.jpg';

function History() {
    const [activeTab, setActiveTab] = useState(1);

    // 컴포넌트가 마운트될 때 페이지 맨 위로 스크롤
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const historyData = {
        1: {
            title: "1차 에셀 마켓",
            date: "2024년 6월",
            description: "첫 번째 에셀 마켓의 시작. 시흥순복음교회에서 처음으로 열린 특별한 마켓의 순간들입니다.",
            highlights: ["1", "2", "3"],
            image: poster1
        },
        2: {
            title: "2차 에셀 마켓", 
            date: "2024년 10월",
            description: "더욱 풍성해진 두 번째 에셀 마켓. 두 번째 에셀 마켓에 대한 설명",
            highlights: ["1", "2", "3"],
            image: poster2
        },
        3: {
            title: "3차 에셀 마켓",
            date: "2025년 5월", 
            description: "세 번째 에셀 마켓에서. 세 번째 에셀 마켓에 대한 설명",
           highlights: ["1", "2", "3"],
            image: poster3
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
