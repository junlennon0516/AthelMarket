import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Booth.css';
import './font.css';
import tteokImage from '../assets/booth_icons/tteok.png';
import pancakeImage from '../assets/booth_icons/pancake.png';
import skewerImage from '../assets/booth_icons/skewer.png';
import cottonCandyImage from '../assets/booth_icons/cotton-candy.png';
import socksImage from '../assets/booth_icons/socks.png';
import baseballImage from '../assets/booth_icons/baseball.png';
import dalgonaImage from '../assets/booth_icons/dalgona.png';
import keychainImage from '../assets/booth_icons/keychain.png';
import lunchBoxImage from '../assets/booth_icons/lunch-box.png';
import iceCreamImage from '../assets/booth_icons/ice-cream.png';
import noodleImage from '../assets/booth_icons/noodles.png';
import drinkImage from '../assets/booth_icons/drink.png';
import waffleImage from '../assets/booth_icons/waffle.png';
import facePaintingImage from '../assets/booth_icons/face-paint.png';
import lettuceImage from '../assets/booth_icons/lettuce.png';
import plantpotImage from '../assets/booth_icons/plant-pot.png';
import stationeryImage from '../assets/booth_icons/stationery.png';
import penImage from '../assets/booth_icons/pen.png';
import clothesImage from '../assets/booth_icons/clothes.png';


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
                    id: "candy",
                    title: "솜사탕",
                    details: "달콤한 구름 한 입",
                    items: [],
                    image: cottonCandyImage
                },
                {
                    id: "naengmyeon",
                    title: "냉면",
                    details: "여더위? 한 그릇이면 끝.",
                    items: ["비빔냉면", "물냉면"],
                    image: noodleImage
                },
                {
                    id: "dalgona-waffle",
                    title: "달고나·와플",
                    details: "달콤한 옛 추억과 바삭한 와플",
                    items: ["달고나", "와플"],
                    image: [dalgonaImage, waffleImage]
                },
                {
                    id: "snack",
                    title: "분식",
                    details: "배고픔 해결은 여기서!",
                    items: [
                        "떡볶이 3,000원",
                        "순대 4,000원",
                        "만두 2개 1,000원",
                        "떡꼬치 1개 1,000원",
                        "어묵 1개 1,000원 / 3개 2,000원"
                    ],
                    image: tteokImage
                },
                {
                    id: "skewer",
                    title: "꼬치구이",
                    details: "한 입 쏙! 불향 가득 꼬치구이",
                    items: [],
                    image: skewerImage
                },
                {
                    id: "yogurt",
                    title: "요아정 (요거트 아이스크림)",
                    details: "시원달콤 요거트 아이스크림으로 마무리!",
                    items: [],
                    image: iceCreamImage
                },
                {
                    id: "jeon",
                    title: "전",
                    details: "고소한 전 냄새 가득!",
                    items: ["김치전 4,000원", "미나리새우전 6,000원"],
                    image: pancakeImage
                },
                {
                    id: "kimchi",
                    title: "장금이네",
                    details: "손맛이 살아있는 반찬과 김치! 밥 한 그릇 뚝딱!",
                    items: [
                        "김치",
                        "백김치",
                        "오이소박이",
                        "쪽파김치",
                        "배추겉절이",
                        "알타리김치",
                        "도라지무침",
                        "양념깻잎",
                        "멸치볶음",
                        "진미채",
                        "마른새우볶음",
                        "연근조림",
                        "잡채"
                    ],
                    image: lunchBoxImage
                },
                {
                    id: "drink",
                    title: "음료·뻥튀기",
                    details: "시원한 음료와 바삭바삭 뻥튀기",
                    items: [
                        "아이스 아메리카노 2,000원",
                        "아이스티 1,500원",
                        "옛날커피 2,000원",
                        "캔음료 1,000원",
                        "생수 700원",
                        "뻥튀기 1봉지 2,000원"
                    ],
                    image: drinkImage
                }
            ]
        },
        game: {
            title: "놀이/체험존",
            description: "아이도 어른도 함께 웃는 즐거운 체험들!",
            booths: [
                {
                    id: "baseball",
                    title: "야구공 던지기",
                    details: "스트라이크 한 방에 상품이 짠!",
                    image: baseballImage
                },
                {
                    id: "face-painting",
                    title: "페이스 페인팅",
                    details: "예쁜 얼굴에 예쁜 그림을 그려보세요!",
                    image: facePaintingImage
                },
                {
                    id: "planting",
                    title: "상추 모종 심기",
                    details: "내 손으로 키우는 작은 농장!",
                    image: lettuceImage
                },
                {
                    id: "keychain-making",
                    title: "키링 만들기",
                    details: "세상에 하나뿐인 나만의 키링을 만들어보세요!",
                    image: keychainImage
                },
                {
                    id: "pen-customizing",
                    title: "볼꾸(불펜꾸미기)",
                    details: "내 취향대로 꾸미는 세상 하나뿐인 볼펜!",
                    image: penImage
                },
            ]
        },
        sale: {
            title: "쇼핑존",
            description: "사는 재미, 보는 재미, 고르는 재미 총집합!",
            booths: [
                {
                    id: "socks",
                    title: "양말",
                    details: "발끝까지 스타일 완성!",
                    items: [
                        "양말, 속옷 등 다양한 잡화",
                        "100% 국산 제품"
                    ],
                    image: socksImage
                },
                {
                    id: "misc-jeon",
                    title: "잡화",
                    details: "실속 있는 잡화 다 모였다!",
                    items: ["티셔츠 등 다양한 잡화"],
                    image: stationeryImage
                },
                {
                    id: "keyring-etc",
                    title: "키링·헤어 악세서리",
                    details: "코디의 완성, 여기 있어요!",
                    items: ["키링", "헤어 악세서리"],
                    image: keychainImage
                },
                {
                    id: "plantpot",
                    title: "화분",
                    details: "힐링, 화분 한 개로 시작!",
                    items: ["화분"],
                    image: plantpotImage
                },
                {
                    id: "vintage-daiso",
                    title: "빈티지다이쏘(구제샵)",
                    details: "득템의 재미! 다양한 구제 아이템을 만나보세요.",
                    items: ["구제 의류", "빈티지 잡화"],
                    image: clothesImage
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
                    <h2 className="noto-sans-kr-bold">제 5차 에셀 마켓 부스</h2>
                    <p className="payment-notice noto-sans-kr-semi-bold">모든 부스에서는 계좌이체 또는 현금으로<br />결제하실 수 있습니다! (카드 결제 불가)</p>
                    
                    {Object.entries(boothData).map(([categoryKey, category]) => (
                        <div key={categoryKey} className="booth-category-section">
                            <div className="category-header">
                                <h3 className="category-title noto-sans-kr-bold">{category.title}</h3>
                            </div>
                            <p className="category-description noto-sans-kr-medium">{category.description}</p>
                            <div className="booth-list">
                                {category.booths.map((booth) => {
                                    const boothImages = Array.isArray(booth.images)
                                        ? booth.images
                                        : Array.isArray(booth.image)
                                            ? booth.image
                                            : booth.image
                                                ? [booth.image]
                                                : [];

                                    return (
                                    <div key={booth.id} className="booth-item">
                                        <div className="booth-image">
                                            {boothImages.length > 1 ? (
                                                <div className="booth-images-container">
                                                    {boothImages.map((img, index) => (
                                                        <img key={index} src={img} alt={`${booth.title} ${index + 1}`} />
                                                    ))}
                                                </div>
                                            ) : (
                                                <img src={boothImages[0]} alt={booth.title} />
                                            )}
                                        </div>
                                        <div className="booth-info">
                                            <div className="booth-title">{booth.title}</div>
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
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>

        </div>
    );
}

export default Booth;

