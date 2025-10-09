import React from 'react';
import { Link } from 'react-router-dom';
import './Booth.css';

function Booth() {
    return (
        <div className="booth-container">
            {/* 헤더 */}
            <header className="booth-header">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                    </svg>
                </Link>
                <h1 className="booth-header-title">부스 안내</h1>
                <div className="header-spacer"></div>
            </header>

            {/* 메인 콘텐츠 */}
            <div className="booth-content">
                <div className="booth-text">
                    <h2>2025 에셀 마켓 부스</h2>
                    <p>다양한 부스들이 준비되어 있습니다.</p>
                    <p>각 부스별 특색있는 활동을 경험해보세요.</p>
                    
                    <div className="booth-categories">
                        <div className="booth-category">
                            <h3>🍕 음식 부스</h3>
                            <p>다양한 음식과 음료를 제공합니다</p>
                        </div>
                        <div className="booth-category">
                            <h3>🎮 게임 부스</h3>
                            <p>재미있는 게임과 이벤트를 즐기세요</p>
                        </div>
                        <div className="booth-category">
                            <h3>🎨 체험 부스</h3>
                            <p>창작 활동과 체험 프로그램</p>
                        </div>
                        <div className="booth-category">
                            <h3>🛍️ 판매 부스</h3>
                            <p>특별한 상품들을 만나보세요</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booth;


