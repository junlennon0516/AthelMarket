import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Vision.css';
import './font.css';
import main1Image from '../assets/main/main-1.jpg';
import athelTreeImage from '../assets/athel_tree.jpg';

function Vision() {
    // 페이지가 로드될 때 맨 위로 스크롤 (모바일 대응)
    useEffect(() => {
        // 즉시 스크롤 초기화
        window.scrollTo(0, 0);
        
        // 모바일에서 지연된 스크롤 초기화
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
        
        // 추가 보정 (iOS Safari 대응)
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 300);
    }, []);
    return (
        <div className="vision-container">
            {/* 헤더 */}
            <header className="vision-header">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                    </svg>
                </Link>
                <h1 className="vision-header-title noto-sans-kr-bold">에셀 마켓 소개</h1>
                <div className="header-spacer"></div>
            </header>

            {/* 메인 콘텐츠 */}
            <div className="vision-content">
                <div className="vision-text">
                    <h1 className="vision-main-title noto-sans-kr-bold">에셀 마켓 소개</h1>
                    
                    <div className="vision-image-container">
                        <img src={main1Image} alt="에셀 마켓" className="vision-image" />
                    </div>
                    
                    <div className="vision-description">
                        <p className="noto-sans-kr-medium">지역주민들에게 무료한 일상을 </p>
                        <p className="noto-sans-kr-medium">유익하게 채워줄</p>
                        <p className="noto-sans-kr-medium">질 좋고 가성비 좋은 제품들을 제공하고</p>
                        <p className="noto-sans-kr-medium">맛있는 먹거리로 입맛까지 사로잡는</p>
                        <p className="noto-sans-kr-medium">동네로 찾아가는 플리마켓입니다.</p>
                    </div>
                    
                    {/* 구분선 */}
                    <hr className="vision-divider" />
                    
                    {/* 에셀의 의미 섹션 */}
                    <div className="athel-meaning-section">
                        <p className="athel-quote noto-sans-kr-medium">
                            "아브라함이 브엘세바에 에셀 나무를 심고 거기서 영원하신 하나님 여호와의 이름을 불렀으며" (창세기 21:33)
                        </p>
                        
                        <h2 className="athel-question noto-sans-kr-bold">에셀이란?</h2>
                        
                        <p className="athel-definition noto-sans-kr-medium">
                            "영원하신 하나님"을 의미합니다.
                        </p>
                        
                        <h3 className="athel-tree-title noto-sans-kr-bold">에셀 나무의 특징</h3>
                        
                        <div className="athel-tree-image-container">
                            <img src={athelTreeImage} alt="에셀 나무" className="athel-tree-image" />
                        </div>
                        
                        <div className="athel-tree-description">
                            <p className="noto-sans-kr-medium">에셀나무는 길게 뻗은 가지에 작은 잎사귀들이  <br />촘촘히 붙어 있는 상수리나무로,</p>
                            <p className="noto-sans-kr-medium">유난히 시원한 그늘을 제공하는 것이 특징입니다.</p>
                            <p className="noto-sans-kr-medium">이는 이파리의 증발 작용 덕분에 주변 온도를 낮추어</p>
                            <p className="noto-sans-kr-medium">다른 나무보다 평균 10도 정도 더 시원하기 때문입니다.</p>
                        </div>
                        
                        <p className="athel-closing-message noto-sans-kr-bold">
                            시흥순복음교회 에셀마켓은 <br />이곳에 찾아오신 모든 분들의 <br />
                            지치고 무더운 삶속에 잠시 쉬어갈  <br />시원한 그늘이 되길 원합니다.
                        </p>
                        
                        <p className="athel-footnote noto-sans-kr-medium">
                            * 에셀마켓의 판매수익금 일부는 <br/>아프리카 구제(선교)활동에 사용됩니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision;
