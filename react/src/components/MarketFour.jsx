import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MarketFour.css';
import './font.css';
import posterImage from '../assets/poster/poster-4.jpg';

function MarketFour() {
    // 페이지가 로드될 때 맨 위로 스크롤
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                    <h1 className="marketfour-main-title noto-sans-kr-bold">제 4차 에셀 마켓</h1>
                    
                    <div className="poster-container">
                        <img src={posterImage} alt="제 4차 에셀 마켓 포스터" className="poster-image" />
                    </div>
                    
                    <div className="marketfour-description">
                        <p className="noto-sans-kr-medium">소소하지만 알차다! 재밌다! <br/>또 오고 싶은 이 곳!</p>
                        <p className="noto-sans-kr-bold">2025년 10월 25일 오후 2:00~5:30, <br/>시흥순복음교회 에셀센터에서 만나요!</p>
                        <p className="noto-sans-kr-medium">다양한 부스와 특별한 체험, <br/>맛있는 음식까지 준비되어 있습니다.</p>
                        <p className="noto-sans-kr-medium">가족, 친구들과 함께 즐거운 시간을 보내세요!</p>
                    </div>
                    
                    <div className="navigation-buttons">
                        <Link to="/booth" className="nav-button booth-button noto-sans-kr-bold">
                            🏪 부스 안내
                        </Link>
                        <Link to="/qanda" className="nav-button qanda-button noto-sans-kr-bold">
                            ❓ Q&A
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketFour;
