import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Booth.css';
import './font.css';
import tteokImage from '../assets/booth_icons/tteok.png';
import skewerImage from '../assets/booth_icons/skewer.png';
import cottonCandyImage from '../assets/booth_icons/cotton-candy.png';
import socksImage from '../assets/booth_icons/socks.png';
import dalgonaImage from '../assets/booth_icons/dalgona.png';
import keychainImage from '../assets/booth_icons/keychain.png';
import kimchiImage from '../assets/booth_icons/kimchi-jar.svg';
import noodleImage from '../assets/booth_icons/noodles.png';
import waffleImage from '../assets/booth_icons/waffle.png';
import facePaintingImage from '../assets/booth_icons/face-paint.png';
import clothesImage from '../assets/booth_icons/clothes.png';

import potatoImage from '../assets/booth_icons/potato.png';
import sweetPotatoImage from '../assets/booth_icons/sweet-potato.svg';
import pancakeImage from '../assets/booth_icons/pancake.png';
import drinkImage from '../assets/booth_icons/drink.png';
import keycapSlimeImage from '../assets/booth_icons/keycap-slime.svg';
import balloonDartsImage from '../assets/booth_icons/balloon-darts.svg';
import perfumeImage from '../assets/booth_icons/perfume.svg';
import rouletteImage from '../assets/booth_icons/roulette.svg';

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
        "food": {
            "title": "푸드존",
            "description": "맛있는 먹거리와 달콤한 간식을 만나보세요!",
            "booths": [
                {
                    "id": "food-1",
                    "title": "솜사탕 · 회오리감자",
                    "details": "달콤한 구름 한 입, 바삭한 감자 한 꼬치!",
                    "items": [
                        "솜사탕",
                        "회오리감자"
                    ],
                    "itemLabel": "메뉴",
                    "images": [
                        cottonCandyImage,
                        potatoImage
                    ]
                },
                {
                    "id": "food-2",
                    "title": "냉면",
                    "details": "시원한 냉면! 취향대로 물냉면, 비빔냉면!",
                    "items": [
                        "물냉면",
                        "비빔냉면"
                    ],
                    "itemLabel": "메뉴",
                    "image": noodleImage
                },
                {
                    "id": "food-3",
                    "title": "달고나 · 호떡",
                    "details": "달콤한 추억과 따끈한 간식 한 입!",
                    "items": [
                        "달고나",
                        "호떡"
                    ],
                    "itemLabel": "메뉴",
                    "images": [
                        dalgonaImage,
                        pancakeImage
                    ]
                },
                {
                    "id": "food-4",
                    "title": "분식집",
                    "details": "이것저것 골라 먹는 분식 한 상!",
                    "items": [
                        "꼬마김밥",
                        "오뎅",
                        "떡볶이",
                        "순대"
                    ],
                    "itemLabel": "메뉴",
                    "image": tteokImage
                },
                {
                    "id": "food-5",
                    "title": "음료 · 뻥튀기",
                    "details": "시원하게 한 모금, 바삭하게 한 입!",
                    "items": [
                        "음료(커피, 에이드 외)",
                        "뻥튀기"
                    ],
                    "itemLabel": "메뉴",
                    "image": drinkImage
                },
                {
                    "id": "food-6",
                    "title": "국산 먹거리",
                    "details": "김치부터 식혜까지, 모두 국산으로 준비했어요!",
                    "items": [
                        "김치류",
                        "참기름",
                        "들기름",
                        "식혜"
                    ],
                    "itemLabel": "메뉴",
                    "image": kimchiImage
                },
                {
                    "id": "food-7",
                    "title": "전통 장터",
                    "details": "깊고 구수한 맛으로 밥상을 채워보세요!",
                    "items": [
                        "된장",
                        "고추장",
                        "청국장"
                    ],
                    "itemLabel": "메뉴",
                    "image": kimchiImage
                },
                {
                    "id": "food-8",
                    "title": "꼬치구이",
                    "details": "한 입 쏙! 맛있는 꼬치를 즐겨보세요!",
                    "items": [
                        "꼬치(양꼬치 외)"
                    ],
                    "itemLabel": "메뉴",
                    "image": skewerImage
                },
                {
                    "id": "food-9",
                    "title": "와플",
                    "details": "달콤한 와플로 기분 좋은 간식 시간!",
                    "items": [
                        "와플"
                    ],
                    "itemLabel": "메뉴",
                    "image": waffleImage
                }
            ]
        },
        "shopping": {
            "title": "쇼핑존",
            "description": "고르는 재미 가득한 작은 가게들!",
            "booths": [
                {
                    "id": "shopping-1",
                    "title": "양말 가게",
                    "details": "발끝까지 기분 좋게, 마음에 드는 양말을 골라보세요!",
                    "items": [
                        "양말"
                    ],
                    "itemLabel": "판매 품목",
                    "image": socksImage
                },
                {
                    "id": "shopping-2",
                    "title": "패션잡화 · 구제샵",
                    "details": "나만의 스타일을 찾는 득템 시간!",
                    "items": [
                        "패션잡화",
                        "구제샵(중고물품)"
                    ],
                    "itemLabel": "판매 품목",
                    "image": clothesImage
                },
                {
                    "id": "shopping-3",
                    "title": "키링 가게",
                    "details": "작은 키링 하나로 나만의 포인트!",
                    "items": [
                        "키링"
                    ],
                    "itemLabel": "판매 품목",
                    "image": keychainImage
                }
            ]
        },
        "experience": {
            "title": "놀이 · 체험존",
            "description": "직접 만들고 신나게 즐기는 체험 시간!",
            "booths": [
                {
                    "id": "experience-1",
                    "title": "향수 공방",
                    "details": "향기로운 나만의 작품을 만들어보세요!",
                    "items": [
                        "향수 만들기(비누)"
                    ],
                    "itemLabel": "체험 항목",
                    "image": perfumeImage
                },
                {
                    "id": "experience-2",
                    "title": "키캡 · 슬라임 공방",
                    "details": "내 취향대로 꾸미고 조물조물 만들어보세요!",
                    "items": [
                        "키캡 만들기",
                        "슬라임 만들기"
                    ],
                    "itemLabel": "체험 항목",
                    "image": keycapSlimeImage
                },
                {
                    "id": "experience-3",
                    "title": "풍선다트",
                    "details": "조준하고 던져보세요! 톡톡 터지는 재미!",
                    "items": [
                        "풍선다트"
                    ],
                    "itemLabel": "체험 항목",
                    "image": balloonDartsImage
                },
                {
                    "id": "experience-4",
                    "title": "돌려돌려돌림판",
                    "details": "돌림판을 돌리고 옛날과자를 만나보세요!",
                    "items": [
                        "룰렛",
                        "옛날과자"
                    ],
                    "itemLabel": "체험 항목",
                    "image": rouletteImage
                },
                {
                    "id": "experience-5",
                    "title": "페이스페인팅",
                    "details": "얼굴 위에 피어나는 알록달록한 그림!",
                    "items": [
                        "페이스페인팅"
                    ],
                    "itemLabel": "체험 항목",
                    "image": facePaintingImage
                },
                {
                    "id": "experience-6",
                    "title": "고구마캐기체험",
                    "details": "흙 속에 숨어 있는 고구마를 찾아보세요!",
                    "items": [
                        "고구마캐기체험"
                    ],
                    "itemLabel": "체험 항목",
                    "image": sweetPotatoImage
                }
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
                    <h2 className="noto-sans-kr-bold">제6회 에셀마켓 부스목록</h2>
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
                                                    <h4>{booth.itemLabel}</h4>
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

