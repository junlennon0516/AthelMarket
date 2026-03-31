import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Church.css';
import './font.css';
import churchImage from '../assets/church/church.png';
import sec1Image from '../assets/church/sec1.jpg';
import sec5Image from '../assets/church/sec5.jpg';
import sec3Image from '../assets/church/sec3.jpg';
import sec4Image from '../assets/church/sec4.jpg';
import ChurchMap from './ChurchMap';

function Church() {
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
        <div className="church-container">
            {/* 헤더 */}
            <header className="church-header">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                    </svg>
                </Link>
                <h1 className="church-header-title noto-sans-kr-bold">교회 소개</h1>
                <div className="header-spacer"></div>
            </header>

            {/* 메인 콘텐츠 */}
            <div className="church-content">
                <div className="church-text">
                    <h1 className="church-main-title noto-sans-kr-bold">시흥순복음교회</h1>
                    
                    {/* 교회 이미지 */}
                    <div className="church-image-container">
                        <img src={churchImage} alt="시흥순복음교회" className="church-image" />
                    </div>
                    
                     <div className="church-info-container">
                         <span className="church-info-item noto-sans-kr-bold">담임목사 우수윤<br/></span>
                         <span className="church-info-item noto-sans-kr-medium">경기도 시흥시 시청로 78 시흥순복음교회<br/></span>
                         <span className="church-info-item noto-sans-kr-medium">T. 031-517-5017</span>
                     </div>

                     <h2 className="church-intro-title noto-sans-kr-bold">교회 소개</h2>
                    <p className="church-intro-text noto-sans-kr-medium">
                    시흥순복음교회는<br/>
                    기독교대한하나님의성회 안산시흥지방회에 소속된 교회로서<br/>
                    오순절신앙의 핵심인 성령충만을 통하여<br/>
                    <b>복음전도와 예수의 사랑을 이웃에게 전하는 것</b>을
                    목표로 삼은 신앙공동체입니다.<br/><br/>
                        
                    삶에 예수의 가치를 더하는 의미 있고<br/>
                    복된 삶을 누리길 원하신다면<br/>
                        
                    <b>사랑이 넘치는 행복한 교회,</b><br/>
                    <span className="church-invitation">시흥순복음교회로 오세요!</span>
                    </p>

                    {/* 사역 섹션들 */}
                    <div className="ministry-sections">
                        {/* 에셀마켓 섹션 */}
                        <div className="ministry-section essel-market">
                            <div className="ministry-header-bar">
                                <span className="ministry-header-title noto-sans-kr-bold">에셀마켓</span>
                            </div>
                            <div className="ministry-image-container">
                                    <img src={sec1Image} alt="에셀마켓" className="ministry-image" />
                                </div>
                            <div className="ministry-content">
                                <div className="ministry-text">
                                    <p className="ministry-description noto-sans-kr-medium">
                                        지역주민들에게 무료한 일상을<br/>
                                        유익하게 채워줄<br/>
                                        <b>질 좋고 가성비 좋은 제품</b>들을 제공하고<br/>
                                        맛있는 먹거리로 입맛까지 사로잡는<br/>
                                        동네로 찾아가는 플리마켓입니다.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* 지역아동센터 섹션 */}
                        <div className="ministry-section children-center">
                            <div className="ministry-header-bar">
                                <span className="ministry-header-title noto-sans-kr-bold">지역아동센터</span>
                            </div>
                            <div className="ministry-content">
                                <div className="ministry-text">
                                    <p className="ministry-description noto-sans-kr-medium">
                                        돌봄이 필요한 지역 아동들에게<br/>
                                        따뜻한 마음과 음식을 나누고<br/>
                                        성장에 맞춰 각종 필요를 채워주는<br/>
                                        <b>아이들의 전문 헬퍼기관</b>입니다.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    {/* 추가 사역 섹션들 */}
                    <div className="ministry-sections">
                        {/* 좋은일꾼학교 섹션 */}
                        <div className="ministry-section good-worker-school">
                            <div className="ministry-header-bar">
                                <span className="ministry-header-title noto-sans-kr-bold">좋은일꾼학교</span>
                            </div>
                            <div className="ministry-image-container">
                                    <img src={sec3Image} alt="좋은일꾼학교" className="ministry-image" />
                                </div>
                            <div className="ministry-content">
                                <div className="ministry-text">
                                    <p className="ministry-description noto-sans-kr-medium">
                                        시흥순복음교회가 지향하는
                                        성경적인 교육과 훈련을 통해
                                        <b>남을 잘되게 하고 예수의 사랑을
                                        이웃에게 전하는 일꾼</b>으로
                                        양성하는 교육과정입니다.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* 에셀농장 섹션 */}
                        <div className="ministry-section essel-farm">
                            <div className="ministry-header-bar">
                                <span className="ministry-header-title noto-sans-kr-bold">에셀농장</span>
                            </div>
                            <div className="ministry-image-container">
                                    <img src={sec4Image} alt="에셀농장" className="ministry-image" />
                                </div>
                            <div className="ministry-content">
                                <div className="ministry-text">
                                    <p className="ministry-description noto-sans-kr-medium">
                                        내 손으로 직접 일궈낸 밭에서
                                        <b>직접 재배한 제철 맞은 유기농 수확물</b>로
                                        내 몸을 건강하게 만드는
                                        건강프로젝트 농장입니다.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* 신앙유산 섹션 */}
                        <div className="ministry-section faith-heritage">
                            <div className="ministry-header-bar">
                                <span className="ministry-header-title noto-sans-kr-bold">신앙유산</span>
                            </div>
                            <div className="ministry-image-container">
                                <img src={sec5Image} alt="지역아동센터" className="ministry-image" />
                            </div>
                            <div className="ministry-content">
                                <div className="ministry-text">
                                    <p className="ministry-description noto-sans-kr-medium">
                                        6.25 전쟁 이후 60년 만에 가장 빈곤에서
                                        가장 부강한 나라로 일으킨 한국 교회만의 믿음이
                                        <b>다음세대에도 계승되어 선한 영향력</b>을 펼칠 수 있도록
                                        온 가족이 하나님 앞에서 서약하는 신앙유산입니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 구분선 */}
                    <hr className="church-divider" />
                    
                    <h2 className="pastoral-vision-title noto-sans-kr-bold">목회 비전</h2>
                    
                    {/* 비전 섹션들 */}
                    <div className="vision-sections">
                        {/* 일만플랜 섹션 */}
                        <div className="vision-section ilman-plan">
                            <div className="vision-header-bar">
                                <span className="vision-header-title noto-sans-kr-bold">일만플랜</span>
                                <span className="vision-header-number">561</span>
                            </div>
                            <h3 className="vision-main-heading noto-sans-kr-bold">
                                오대양 육대주에 <br/>일만개의 교회를 세우자!
                            </h3>
                            <p className="vision-description noto-sans-kr-medium">
                                예수님의 지상명령인 <b>만민에게 복음을 전파하기 위하여</b> 교육, 기업, 의료, 복지, 교회를 이루는 
                                5대 기관을 세워 <b>오대양 육대주에 일만개의 교회를 세우는 비전</b>을 품고 달려나아가고 있습니다.
                            </p>
                        </div>
                        
                        {/* LBO 캠페인 섹션 */}
                        <div className="vision-section lbo-campaign">
                            <div className="vision-header-bar">
                                <span className="vision-header-title noto-sans-kr-bold">LBO</span>
                                <span className="vision-header-subtitle">Let's bless others</span>
                            </div>
                            <h3 className="vision-main-heading noto-sans-kr-bold">
                                남을 잘되게 하자!
                            </h3>
                            <p className="vision-description noto-sans-kr-medium">
                                예수님의 사랑으로 삶에 지쳐있는 이들에게 힘과 위로와 소망을 주고 다시 일으켜 세워 
                                복된 삶으로 나갈 수 있도록 <b>도움을 주고자 힘쓰는 시흥순복음교회 캠페인</b>입니다.
                            </p>
                        </div>
                    </div>               
                    
                    {/* 구분선 */}
                    <hr className="church-divider" />
                    <h2 className="church-intro-title noto-sans-kr-bold">오시는 길</h2>
                    <ChurchMap />
                    
                    <hr className="church-divider" />
                    <h2 className="church-intro-title noto-sans-kr-bold">예배 시간 안내</h2>
                    
                    {/* 예배 시간표 */}
                    <div className="worship-schedule">
                        <div className="worship-item">
                            <div className="worship-name noto-sans-kr-bold">주일 1부</div>
                            <div className="worship-day noto-sans-kr-medium">주일</div>
                            <div className="worship-time noto-sans-kr-bold">오전 07:00</div>
                        </div>
                        
                        <div className="worship-item">
                            <div className="worship-name noto-sans-kr-bold">주일 2부</div>
                            <div className="worship-day noto-sans-kr-medium">주일</div>
                            <div className="worship-time noto-sans-kr-bold">오전 11:00</div>
                        </div>
                        
                        <div className="worship-item">
                            <div className="worship-name noto-sans-kr-bold">주일 3부</div>
                            <div className="worship-day noto-sans-kr-medium">주일</div>
                            <div className="worship-time noto-sans-kr-bold">오후 01:30</div>
                        </div>
                        
                        <div className="worship-item">
                            <div className="worship-name noto-sans-kr-bold">수요예배</div>
                            <div className="worship-day noto-sans-kr-medium">수요일</div>
                            <div className="worship-time noto-sans-kr-bold">오후 08:00</div>
                        </div>
                        
                        <div className="worship-item">
                            <div className="worship-name noto-sans-kr-bold">금요소망기도회</div>
                            <div className="worship-day noto-sans-kr-medium">금요일</div>
                            <div className="worship-time noto-sans-kr-bold">오후 08:00</div>
                        </div>
                        
                        <div className="worship-item">
                            <div className="worship-name noto-sans-kr-bold">월삭예배</div>
                            <div className="worship-day noto-sans-kr-medium">매월1일</div>
                            <div className="worship-time noto-sans-kr-bold">오후 08:00</div>
                        </div>
                        
                        <div className="worship-item">
                            <div className="worship-name noto-sans-kr-bold">영유아부</div>
                            <div className="worship-day noto-sans-kr-medium">주일</div>
                            <div className="worship-time noto-sans-kr-bold">오전 11:00</div>
                        </div>
                        
                        <div className="worship-item">
                            <div className="worship-name noto-sans-kr-bold">주일학교</div>
                            <div className="worship-day noto-sans-kr-medium">주일</div>
                            <div className="worship-time noto-sans-kr-bold">오전 09:00</div>
                        </div>
                        
                        <div className="worship-item">
                            <div className="worship-name noto-sans-kr-bold">중고등부</div>
                            <div className="worship-day noto-sans-kr-medium">주일</div>
                            <div className="worship-time noto-sans-kr-bold">오전 09:00</div>
                        </div>
                        
                        <div className="worship-item">
                            <div className="worship-name noto-sans-kr-bold">저녁 <br/>기도회</div>
                            <div className="worship-day noto-sans-kr-medium">매일</div>
                            <div className="worship-time noto-sans-kr-bold">오후 08:00</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Church;
