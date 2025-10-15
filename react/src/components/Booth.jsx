import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Booth.css';
import './font.css';
import googleEarthImage from '../assets/google_earth_edit.png';
import tteokImage from '../assets/booth_icons/tteok.png';
import pancakeImage from '../assets/booth_icons/pancake.png';
import steakImage from '../assets/booth_icons/steak.png';
import icedCoffeeImage from '../assets/booth_icons/iced-coffee.png';
import cottonCandyImage from '../assets/booth_icons/cotton-candy.png';
import iceCreamImage from '../assets/booth_icons/ice-cream.png';
import flowerImage from '../assets/booth_icons/flower.png';
import socksImage from '../assets/booth_icons/socks.png';
import ceramicsImage from '../assets/booth_icons/ceramics.png';
import toysImage from '../assets/booth_icons/toys.png';
import ballPitImage from '../assets/booth_icons/ball-pit.png';
import baseballImage from '../assets/booth_icons/baseball.png';
import dalgonaImage from '../assets/booth_icons/dalgona.png';
import keychainImage from '../assets/booth_icons/keychain.png';
import lunchBoxImage from '../assets/booth_icons/lunch-box.png';
import manicureImage from '../assets/booth_icons/manicure.png';
import potatoImage from '../assets/booth_icons/potato.png';
import animalImage from '../assets/booth_icons/livestock.png';

function Booth() {
    const [selectedBooth, setSelectedBooth] = useState(null);

    // 페이지가 로드될 때 맨 위로 스크롤
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const boothData = {
        food: {
            title: "푸드존",
            description: "먹고, 또 먹고, 그래도 먹고 싶은 맛집 총출동!",
            booths: [
                {
                    id: "snack",
                    title: "분식",
                    location: "",
                    details: "준비중",
                    items: ["떡볶이: ", "어묵: "],
                    image: tteokImage
                },
                {
                    id: "pancake",
                    title: "전",
                    location: "",
                    details: "준비중",
                    items: ["김치전", "파전"],
                    image: pancakeImage
                },
                {
                    id: "meat",
                    title: "고기",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: steakImage
                },
                {
                    id: "drinks",
                    title: "음료",
                    location: "",
                    details: "준비중",
                    items: ["아이스아메리카노", "아이스티"],
                    image: icedCoffeeImage
                },
                {
                    id: "candy",
                    title: "솜사탕",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: cottonCandyImage
                },
                {
                    id: "icecream",
                    title: "요아정",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: iceCreamImage
                },
            ]
        },
        game: {
            title: "놀이/체험존",
            description: "아이도 어른도 함께 웃는 즐거운 체험들!",
            booths: [
                {
                    id: "animal",
                    title: "동물체험",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: animalImage
                },
                {
                    id: "airzone",
                    title: "미니에어바운스",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: ballPitImage
                },
                {
                    id: "keyring",
                    title: "키링 만들기",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: keychainImage
                },
                {
                    id: "dal",
                    title: "달고나",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: dalgonaImage
                },
                {
                    id: "baseball",
                    title: "야구공 던지기",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: baseballImage
                },
                {
                    id: "nail",
                    title: "네일아트",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: manicureImage
                },
                {
                    id: "potato",
                    title: "감자캐기",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: potatoImage
                },
            ]
        },
        sale: {
            title: "쇼핑존",
            description: "사는 재미, 보는 재미, 고르는 재미 총집합!",
            booths: [
                {
                    id: "flower",
                    title: "꽃",
                    location: "",
                    details: "준비중",
                    items: ["꽃"],
                    image: flowerImage
                },
                {
                    id: "underwear",
                    title: "언더웨어 / 양말",
                    location: "",
                    details: "준비중",
                    items: ["언더웨어", "양말"],
                    image: socksImage
                },
                {
                    id: "dish",
                    title: "도자기그릇",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: ceramicsImage
                },
                {
                    id: "toy",
                    title: "문구 / 완구",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: toysImage
                },
                {
                    id: "food",
                    title: "반찬",
                    location: "",
                    details: "준비중",
                    items: [""],
                    image: lunchBoxImage
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
                    <p className="noto-sans-kr-medium">다양한 부스들이 준비되어 있습니다</p>
                    
                    {/* 부스 배치도 */}
                    <div className="booth-map-container">
                        <img src={googleEarthImage} alt="부스 배치도" className="booth-map" />
                    </div>
                    
                    {Object.entries(boothData).map(([categoryKey, category]) => (
                        <div key={categoryKey} className="booth-category-section">
                            <div className="category-header">
                                <h3 className="category-title noto-sans-kr-bold">{category.title}</h3>
                            </div>
                            <p className="category-description">{category.description}</p>
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
                                <h4>판매 항목 / 가격:</h4>
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


