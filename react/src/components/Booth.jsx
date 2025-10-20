import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Booth.css';
import './font.css';
import googleEarthImage from '../assets/BoothMap2.jpg';
import tteokImage from '../assets/booth_icons/tteok.png';
import pancakeImage from '../assets/booth_icons/pancake.png';
import skewerImage from '../assets/booth_icons/skewer.png';
import icedCoffeeImage from '../assets/booth_icons/iced-coffee.png';
import cottonCandyImage from '../assets/booth_icons/cotton-candy.png';
import tacoImage from '../assets/booth_icons/taco.png';
import flowerImage from '../assets/booth_icons/flower.png';
import socksImage from '../assets/booth_icons/socks.png';
import ceramicsImage from '../assets/booth_icons/ceramics.png';
import toysImage from '../assets/booth_icons/toys.png';
import ballPitImage from '../assets/booth_icons/ball-pit.png';
import baseballImage from '../assets/booth_icons/baseball.png';
import dalgonaImage from '../assets/booth_icons/dalgona.png';
import keychainImage from '../assets/booth_icons/keychain.png';
import lunchBoxImage from '../assets/booth_icons/lunch-box.png';
import ballImage from '../assets/booth_icons/ball.png';
import potatoImage from '../assets/booth_icons/potato.png';
import animalImage from '../assets/booth_icons/livestock.png';
import jewelryImage from '../assets/booth_icons/jewelry.png';
import clothesImage from '../assets/booth_icons/clothes-rack.png';
import knifeImage from '../assets/booth_icons/knife.png';


function Booth() {

    // 페이지가 로드될 때 맨 위로 스크롤
    useEffect(() => {
        // 즉시 스크롤을 맨 위로 이동
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // 추가적으로 약간의 지연 후에도 스크롤 위치 확인
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    const boothData = {
        food: {
            title: "푸드존",
            description: "먹고, 또 먹고, 그래도 먹고 싶은 맛집 총출동!",
            booths: [
                {
                    id: "skewer",
                    title: "꼬치",
                    location: "1. 건물 1층",
                    details: "고소함, 달콤함, 재미까지 한 꼬치에!",
                    items: ["소시지꼬치", "옥수수꼬치", "마시멜로우꼬치"],
                    image: skewerImage
                },
                {
                    id: "snack",
                    title: "분식",
                    location: "1. 건물 1층",
                    details: "따끈한 분식 한 입이면, 행복도 덤!",
                    items: ["떡볶이: ", "어묵: "],
                    image: tteokImage
                },
                {
                    id: "candy",
                    title: "솜사탕",
                    location: "1. 건물 1층",
                    details: "먹으면 사라지는 달콤한 구름 한 입",
                    items: [""],
                    image: cottonCandyImage
                },
                {
                    id: "drinks",
                    title: "음료",
                    location: "1. 건물 1층",
                    details: "시원하게 한 잔 어떠세요?",
                    items: ["아이스아메리카노", "아이스티"],
                    image: icedCoffeeImage
                },
                {
                    id: "taco",
                    title: "워킹타코",
                    location: "1. 건물 1층",
                    details: "한 손에 쏙! 걸어 다니며 즐기는 멕시칸 풍미",
                    items: [""],
                    image: tacoImage
                },
                {
                    id: "pancake",
                    title: "전",
                    location: "1. 건물 1층",
                    details: "지글지글, 바삭한 전 드세요!",
                    items: ["김치전", "부추전"],
                    image: pancakeImage
                },
            ]
        },
        game: {
            title: "놀이/체험존",
            description: "아이도 어른도 함께 웃는 즐거운 체험들!",
            booths: [
                {
                    id: "animal",
                    title: "어흥! 동물체험",
                    location: "3. 농장",
                    details: "귀여운 동물 친구들과 가까이서 교감하는 시간!",
                    items: [""],
                    image: animalImage
                },
                {
                    id: "potato",
                    title: "감자캐기",
                    location: "2. 건물 뒤 컨테이너 박스 앞",
                    details: "땅 속 보물 찾기! 감자 한 알의 기쁨을 느껴봐요!",
                    items: [""],
                    image: potatoImage
                },
                {
                    id: "dal",
                    title: "달고나 / 칼갈이",
                    location: "3. 농장",
                    details: "추억 소환 완료! 오늘의 달고나 장인은 누구? / 헌 칼을 새 칼로 만드는 칼갈이!",
                    items: [""],
                    image: dalgonaImage
                },
                {
                    id: "ball",
                    title: "랭킹 우주홀",
                    location: "3. 농장",
                    details: "준비중",
                    items: ["실력으로 우주 1등에 도전하라! "],
                    image: ballImage
                },
                {
                    id: "baseball",
                    title: "야구공 던지기",
                    location: "3. 농장",
                    details: "스트레스 한 방에 날려버려! 정확히, 시원하게 던져라!",
                    items: [""],
                    image: baseballImage
                },
                {
                    id: "airzone",
                    title: "에어바운스(영유아 전용)",
                    location: "3. 농장",
                    details: "신나게 뛰고 구르며 에너지 폭발!",
                    items: [""],
                    image: ballPitImage
                },
                {
                    id: "toy",
                    title: "추억의 문방구",
                    location: "3. 농장",
                    details: "추억의 문방구 뽑기! 아이들의 눈이 반짝! 선물 쏜다!",
                    items: [""],
                    image: toysImage
                },
                {
                    id: "keyring",
                    title: "키링 만들기",
                    location: "3. 농장",
                    details: "직접 만드는 키링 공방, 내 맘대로 귀여운 파츠 골라골라~ ",
                    items: [""],
                    image: keychainImage
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
                    location: "3. 농장",
                    details: "향긋한 하루, 마음까지 피어나는 꽃 한 송이",
                    items: ["꽃"],
                    image: flowerImage
                },
                {
                    id: "dish",
                    title: "도자기그릇",
                    location: "3. 농장",
                    details: "따뜻한 우리 집 식탁 위, 예쁜 그릇들",
                    items: [""],
                    image: ceramicsImage
                },
                {
                    id: "side-dish",
                    title: "반찬",
                    location: "1. 건물 1층",
                    details: "손맛이 살아있다! 밥 한 그릇 뚝딱!",
                    items: [""],
                    image: lunchBoxImage
                },
                {
                    id: "jewelry",
                    title: "악세서리",
                    location: "3. 농장",
                    details: "반짝반짝 포인트 하나로 기분 UP!",
                    items: [""],
                    image: jewelryImage
                },
                {
                    id: "clothes",
                    title: "옷 / 잡화류",
                    location: "3. 농장",
                    details: "쓸쓸한 가을 옷장 채우기 딱 좋은 아이템들!",
                    items: [""],
                    image: clothesImage
                },
                {
                    id: "underwear",
                    title: "언더웨어 / 양말",
                    location: "3. 농장",
                    details: "작지만 확실한 행복, 필수템 득템 찬스!",
                    items: ["언더웨어", "양말"],
                    image: socksImage
                },
                {
                    id: "knife",
                    title: "칼갈이",
                    location: "3. 농장",
                    details: "헌 칼을 새 칼로 만드는 칼갈이!",
                    items: [""],
                    image: knifeImage
                },
            ]
        }
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
                    <h2 className="noto-sans-kr-bold">제 4차 에셀 마켓 부스</h2>
                    <p className="payment-notice noto-sans-kr-semi-bold">모든 부스에서는 계좌이체 또는 현금으로<br />결제하실 수 있습니다! (카드 결제 불가)</p>
                    
                    {/* 부스 배치도 */}
                    <div className="booth-map-container">
                        <img src={googleEarthImage} alt="부스 배치도" className="booth-map" />
                    </div>
                    
                    {/* 위치 안내 */}
                    <div className="location-guide">
                        <h3 className="location-title noto-sans-kr-bold">부스 위치 안내</h3>
                        <div className="location-table">
                            <div className="location-item">
                                <div className="location-number">1</div>
                                <div className="location-text">건물 1층</div>
                            </div>
                            <div className="location-item">
                                <div className="location-number">2</div>
                                <div className="location-text">건물 뒤 컨테이너 박스 앞</div>
                            </div>
                            <div className="location-item">
                                <div className="location-number">3</div>
                                <div className="location-text">농장</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 구분선 */}
                    <div className="section-divider"></div>
                    
                    {Object.entries(boothData).map(([categoryKey, category]) => (
                        <div key={categoryKey} className="booth-category-section">
                            <div className="category-header">
                                <h3 className="category-title noto-sans-kr-bold">{category.title}</h3>
                            </div>
                            <p className="category-description noto-sans-kr-medium">{category.description}</p>
                            <div className="booth-list">
                                {category.booths.map((booth) => (
                                    <div key={booth.id} className="booth-item">
                                        <div className="booth-image">
                                            {booth.images ? (
                                                <div className="booth-images-container">
                                                    {booth.images.map((img, index) => (
                                                        <img key={index} src={img} alt={`${booth.title} ${index + 1}`} />
                                                    ))}
                                                </div>
                                            ) : (
                                                <img src={booth.image} alt={booth.title} />
                                            )}
                                        </div>
                                        <div className="booth-info">
                                            <div className="booth-title">{booth.title}</div>
                                            <div className="booth-location noto-sans-kr-medium">
                                                <span className="location-label">위치</span>
                                                <span className="location-value">{booth.location}</span>
                                            </div>
                                            <div className="booth-details">{booth.details}</div>
                                            {booth.items && booth.items.length > 0 && booth.items.some(item => item.trim() !== '') && (
                                                <div className="booth-items">
                                                    <h4>판매 항목</h4>
                                                    <ul>
                                                        {booth.items
                                                            .filter(item => item.trim() !== '')
                                                            .map((item, index) => (
                                                                <li key={index}>{item}</li>
                                                            ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>

        </div>
    );
}

export default Booth;


