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
import steakImage from '../assets/booth_icons/steak.png';
import iceCreamImage from '../assets/booth_icons/ice-cream.png';


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
                    details: "먹으면 사라지는 달콤한 구름 한 입",
                    items: [],
                    image: cottonCandyImage
                },
                {
                    id: "naengmyeon",
                    title: "냉면",
                    details: "여름을 녹여줄 시원한 한 그릇!",
                    items: ["비냉", "물냉"],
                    image: steakImage
                },
                {
                    id: "dalgona-waffle",
                    title: "달고나·와플",
                    details: "달콤한 옛 추억과 바삭한 와플의 만남",
                    items: ["달고나", "와플"],
                    image: dalgonaImage
                },
                {
                    id: "snack",
                    title: "분식",
                    details: "따끈한 분식 한 입이면, 행복도 덤!",
                    items: [],
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
                    details: "시원달콤 요거트 아이스크림으로 마무리",
                    items: [],
                    image: iceCreamImage
                },
            ]
        },
        game: {
            title: "놀이/체험존",
            description: "아이도 어른도 함께 웃는 즐거운 체험들!",
            booths: [
                {
                    id: "youth",
                    title: "청년부 체험",
                    details: "던지고, 그리고, 심는 즐거움이 가득한 청년부 체험 코너!",
                    items: ["야구공 던지기", "페이스페인팅", "상추모종 심기 체험"],
                    image: baseballImage
                },
            ]
        },
        sale: {
            title: "쇼핑존",
            description: "사는 재미, 보는 재미, 고르는 재미 총집합!",
            booths: [
                {
                    id: "socks-drink",
                    title: "양말·음료·뻥튀기",
                    details: "발부터 입까지, 가볍게 즐기는 마켓 필수템!",
                    items: ["양말", "음료", "뻥튀기"],
                    image: socksImage
                },
                {
                    id: "misc-jeon",
                    title: "잡화·전",
                    details: "고소한 전과 실속 있는 잡화를 한자리에",
                    items: ["김치전", "미나리새우전"],
                    image: pancakeImage
                },
                {
                    id: "kimchi",
                    title: "김치류·반찬류",
                    details: "손맛이 살아있다! 밥 한 그릇 뚝딱!",
                    items: [],
                    image: lunchBoxImage
                },
                {
                    id: "keyring-etc",
                    title: "키링·헤어악세서리·키링 만들기·화분",
                    details: "내 스타일을 담는 키링·악세서리·화분, 직접 만들기까지!",
                    items: ["키링", "헤어 악세서리", "키링 만들기 체험", "화분"],
                    image: keychainImage
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


