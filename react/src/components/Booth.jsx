import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Booth.css';
import './font.css';
import googleEarthImage from '../assets/google_earth_edit.png';

function Booth() {
    const [selectedBooth, setSelectedBooth] = useState(null);

    // 페이지가 로드될 때 맨 위로 스크롤
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const boothData = {
        food: {
            title: "🍕 음식 부스",
            description: "다양한 음식과 음료를 제공합니다",
            booths: [
                {
                    id: "pizza",
                    title: "🍕 피자 부스",
                    location: "주차장",
                    details: "신선한 재료로 만든 정통 이탈리안 피자와 다양한 토핑을 제공합니다. 갓 구운 피자의 따뜻한 맛을 경험해보세요.",
                    items: ["마르게리타", "페퍼로니", "하와이안", "치즈 피자"],
                    image: "/api/placeholder/80/80"
                }, 
                {
                    id: "pizza",
                    title: "카페",
                    location: "3층",
                    details: "신선한 재료로 만든 정통 이탈리안 피자와 다양한 토핑을 제공합니다. 갓 구운 피자의 따뜻한 맛을 경험해보세요.",
                    items: ["마르게리타", "페퍼로니", "하와이안", "치즈 피자"],
                    image: "/api/placeholder/80/80"
                }, 
            ]
        },
        game: {
            title: "🎮 게임 부스",
            description: "재미있는 게임과 이벤트를 즐기세요",
            booths: [
                {
                    id: "boardgame",
                    title: "🎲 보드게임 부스",
                    location: "1층",
                    details: "다양한 보드게임과 카드게임을 즐길 수 있습니다. 친구들과 함께 즐거운 시간을 보내세요.",
                    items: ["할리갈리", "우노", "스플렌더", "카탄"],
                    image: "/api/placeholder/80/80"
                }
            ]
        },
        experience: {
            title: "🎨 체험 부스",
            description: "창작 활동과 체험 프로그램",
            booths: [
                {
                    id: "craft",
                    title: "🎨 공예 부스",
                    location: "1층",
                    details: "직접 만들고 체험할 수 있는 다양한 공예 활동을 제공합니다. 창의적인 작품을 만들어보세요.",
                    items: ["도자기", "목공예", "천연비누", "캔들"],
                    image: "/api/placeholder/80/80"
                }
            ]
        },
        sale: {
            title: "🛍️ 판매 부스",
            description: "특별한 상품들을 만나보세요",
            booths: [
                {
                    id: "souvenir",
                    title: "🛍️ 기념품 부스",
                    location: "1층",
                    details: "에셀 마켓만의 특별한 기념품과 핸드메이드 상품을 판매합니다. 의미있는 선물을 찾아보세요.",
                    items: ["키링", "스티커", "텀블러", "액자"],
                    image: "/api/placeholder/80/80"
                },
            ]
        }
    };

    const openModal = (boothType) => {
        setSelectedBooth(boothType);
    };

    const closeModal = () => {
        setSelectedBooth(null);
    };
    return (
        <div className="booth-container">
            {/* 헤더 */}
            <header className="booth-header">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                    </svg>
                </Link>
                <h1 className="booth-header-title noto-sans-kr-bold">부스 안내</h1>
                <div className="header-spacer"></div>
            </header>

            {/* 메인 콘텐츠 */}
            <div className="booth-content">
                <div className="booth-text">
                    <h2 className="noto-sans-kr-bold">2025 에셀 마켓 부스</h2>
                    <p className="noto-sans-kr-medium">다양한 부스들이 준비되어 있습니다.</p>
                    <p className="noto-sans-kr-medium">각 부스별 특색있는 활동을 경험해보세요.</p>
                    
                    {/* 부스 배치도 */}
                    <div className="booth-map-container">
                        <img src={googleEarthImage} alt="부스 배치도" className="booth-map" />
                    </div>
                    
                    {Object.entries(boothData).map(([categoryKey, category]) => (
                        <div key={categoryKey} className="booth-category-section">
                            <div className="category-header">
                                <h3 className="category-title">{category.title}</h3>
                            </div>
                            <div className="booth-list">
                                {category.booths.map((booth) => (
                                    <div key={booth.id} className="booth-item" onClick={() => openModal(booth)}>
                                        <div className="booth-image">
                                            <img src={booth.image} alt={booth.title} />
                                        </div>
                                        <div className="booth-info">
                                            <div className="booth-time">{booth.description}</div>
                                            <div className="booth-title">{booth.title}</div>
                                            <div className="booth-location">{booth.location}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 모달 */}
            {selectedBooth && (
                <div className="booth-modal-overlay" onClick={closeModal}>
                    <div className="booth-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{selectedBooth.title}</h3>
                            <button className="modal-close" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-content">
                            <p className="modal-description">{selectedBooth.details}</p>
                            <div className="modal-items">
                                <h4>제공 항목:</h4>
                                <ul>
                                    {selectedBooth.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Booth;


