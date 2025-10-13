import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './History.css'; 
import './font.css';
import Loading from './Loading';

// 이미지 import
import poster1 from '../assets/poster/poster-1.jpg';
import poster2 from '../assets/poster/poster-2.jpg';
import poster3 from '../assets/poster/poster-3.jpg';

// 히스토리 사진들 import (나중에 실제 사진으로 교체)
import history1_1 from '../assets/history/history-1/5N3A1454.jpg';
import history1_2 from '../assets/history/history-1/5N3A1471.jpg';
import history1_3 from '../assets/history/history-1/5N3A1509.jpg';
import history1_4 from '../assets/history/history-1/5N3A1523.jpg';
import history1_5 from '../assets/history/history-1/5N3A1548.jpg';
import history1_6 from '../assets/history/history-1/5N3A1554.jpg';
import history1_7 from '../assets/history/history-1/5N3A1599.jpeg';
import history1_8 from '../assets/history/history-1/5N3A1594.jpg';
import history1_9 from '../assets/history/history-1/5N3A1556.jpg';
import history1_10 from '../assets/history/history-1/5N3A1605.jpg';

import history2_1 from '../assets/history/history-2/5N3A1544.jpg';
import history2_2 from '../assets/history/history-2/5N3A3682.jpg';
import history2_3 from '../assets/history/history-2/5N3A3685.jpg';
import history2_4 from '../assets/history/history-2/5N3A3688.jpg';
import history2_5 from '../assets/history/history-2/5N3A3693.jpg';
import history2_6 from '../assets/history/history-2/5N3A3696.jpg';
import history2_7 from '../assets/history/history-2/5N3A3704.jpg';
import history2_8 from '../assets/history/history-2/5N3A3721.jpg';
import history2_9 from '../assets/history/history-2/5N3A3723.jpg';
import history2_10 from '../assets/history/history-2/5N3A3728.jpg';
import history2_11 from '../assets/history/history-2/5N3A3736.jpg';
import history2_12 from '../assets/history/history-2/5N3A3741.jpg';

import history3_1 from '../assets/history/history-3/1.jpg';
import history3_2 from '../assets/history/history-3/2.jpg';
import history3_3 from '../assets/history/history-3/3.jpg';
import history3_4 from '../assets/history/history-3/4.jpg';
import history3_5 from '../assets/history/history-3/5.jpg';
import history3_6 from '../assets/history/history-3/6.jpg';
import history3_7 from '../assets/history/history-3/7.jpg';
import history3_8 from '../assets/history/history-3/8.jpg';
import history3_9 from '../assets/history/history-3/9.jpg';
import history3_10 from '../assets/history/history-3/10.jpg';

function History() {
    const [activeTab, setActiveTab] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState({});
    const [isPageLoading, setIsPageLoading] = useState(true);

    // 컴포넌트가 마운트될 때 페이지 맨 위로 스크롤
    useEffect(() => {
        window.scrollTo(0, 0);
        
        // 페이지 로딩 시뮬레이션 (이미지들이 로드될 때까지)
        const timer = setTimeout(() => {
            setIsPageLoading(false);
        }, 2000); // 2초 후 로딩 완료

        return () => clearTimeout(timer);
    }, []);

    // 탭 변경 시 로딩 처리
    const handleTabChange = (tabNumber) => {
        if (tabNumber !== activeTab) {
            setIsLoading(true);
            setActiveTab(tabNumber);
            
            // 이미지 로딩 시뮬레이션 (실제로는 이미지들이 로드될 때까지 기다림)
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); // 1초 후 로딩 완료
        }
    };

    // 이미지 로드 완료 체크
    const handleImageLoad = (tabNumber) => {
        setImagesLoaded(prev => ({
            ...prev,
            [tabNumber]: true
        }));
    };

    // 히스토리 사진 데이터 객체
    const historyPhotos = {
        1: [
            { src: history1_1, alt: "1차 에셀 마켓 사진 1" },
            { src: history1_2, alt: "1차 에셀 마켓 사진 2" },
            { src: history1_3, alt: "1차 에셀 마켓 사진 3" },
            { src: history1_4, alt: "1차 에셀 마켓 사진 4" },
            { src: history1_5, alt: "1차 에셀 마켓 사진 5" },
            { src: history1_6, alt: "1차 에셀 마켓 사진 6" },
            { src: history1_7, alt: "1차 에셀 마켓 사진 7" },
            { src: history1_8, alt: "1차 에셀 마켓 사진 8" },
            { src: history1_9, alt: "1차 에셀 마켓 사진 9" },
            { src: history1_10, alt: "1차 에셀 마켓 사진 10" },
        ],
        2: [
            { src: history2_1, alt: "2차 에셀 마켓 사진 1" },
            { src: history2_2, alt: "2차 에셀 마켓 사진 2" },
            { src: history2_3, alt: "2차 에셀 마켓 사진 3" },
            { src: history2_4, alt: "2차 에셀 마켓 사진 4" },
            { src: history2_5, alt: "2차 에셀 마켓 사진 5" },
            { src: history2_6, alt: "2차 에셀 마켓 사진 6" },
            { src: history2_7, alt: "2차 에셀 마켓 사진 7" },
            { src: history2_8, alt: "2차 에셀 마켓 사진 8" },
            { src: history2_9, alt: "2차 에셀 마켓 사진 9" },
            { src: history2_10, alt: "2차 에셀 마켓 사진 10" },
            { src: history2_11, alt: "2차 에셀 마켓 사진 11" },
            { src: history2_12, alt: "2차 에셀 마켓 사진 12" }
        ],
        3: [
            { src: history3_1, alt: "3차 에셀 마켓 사진 1" },
            { src: history3_2, alt: "3차 에셀 마켓 사진 2" },
            { src: history3_3, alt: "3차 에셀 마켓 사진 3" },
            { src: history3_4, alt: "3차 에셀 마켓 사진 4" },
            { src: history3_5, alt: "3차 에셀 마켓 사진 5" },
            { src: history3_6, alt: "3차 에셀 마켓 사진 6" },
            { src: history3_7, alt: "3차 에셀 마켓 사진 7" },
            { src: history3_8, alt: "3차 에셀 마켓 사진 8" },
            { src: history3_9, alt: "3차 에셀 마켓 사진 9" },
            { src: history3_10, alt: "3차 에셀 마켓 사진 10" }
        ]
    };

    const historyData = {
        1: {
            title: "1차 에셀 마켓",
            date: "2024년 6월",
            description: [
                "소소하고 거창한, 우리동네 에셀마켓의 시작.",
                "시흥순복음교회에서 처음으로 준비한",
                "특별한 에셀 마켓의 순간들입니다."
            ],
            image: poster1
        },
        2: {
            title: "2차 에셀 마켓", 
            date: "2024년 10월",
            description: [
                "놀이동산 콘셉트로 열린 제2차 에셀 마켓!",
                "이전보다 풍성해진 볼거리와 즐길 거리로",
                "방문객들의 큰 호응을 얻었습니다.",
            ],
            image: poster2
        },
        3: {
            title: "3차 에셀 마켓",
            date: "2025년 5월", description: [
                "웰컴 투 에셀 마켓.",
                "민속촌을 컨셉으로 열린 제 3차 에셀 마켓은",
                "다양한 민속놀이와 풍성한 먹거리로",
                "또 한 번 많은 사람들에게 즐거움을 선사했습니다.",
            ],
            image: poster3
        }
    };

    // 페이지 로딩 중일 때 Loading 컴포넌트 표시
    if (isPageLoading) {
        return <Loading />;
    }

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
                    onClick={() => handleTabChange(1)}
                    disabled={isLoading}
                >
                    1차 에셀 마켓
                </button>
                <button 
                    className={`tab-button ${activeTab === 2 ? 'active' : ''}`}
                    onClick={() => handleTabChange(2)}
                    disabled={isLoading}
                >
                    2차 에셀 마켓
                </button>
                <button 
                    className={`tab-button ${activeTab === 3 ? 'active' : ''}`}
                    onClick={() => handleTabChange(3)}
                    disabled={isLoading}
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
                        <div className="history-description noto-sans-kr-medium">
                            {Array.isArray(historyData[activeTab].description) 
                                ? historyData[activeTab].description.map((line, index) => (
                                    <p key={index}>{line}</p>
                                  ))
                                : <p>{historyData[activeTab].description}</p>
                            }
                        </div>

                        {/* 구분선 */}
                        <hr className="history-divider" />
                        
                        {/* 히스토리 사진들 */}
                        <div className="history-photos">
                            <h3 className="history-photos-title noto-sans-kr-bold">추억의 순간들</h3>
                            {isLoading ? (
                                <div className="photos-loading">
                                    <div className="loading-spinner"></div>
                                    <p className="loading-text noto-sans-kr-medium">사진을 불러오는 중...</p>
                                </div>
                            ) : (
                                <div className="history-photos-grid">
                                    {historyPhotos[activeTab].map((photo, index) => (
                                        <div key={index} className="history-photo-item">
                                            <img 
                                                src={photo.src} 
                                                alt={photo.alt}
                                                className="history-photo"
                                                onLoad={() => handleImageLoad(activeTab)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
