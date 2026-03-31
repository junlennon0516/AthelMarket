import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import DDayCounter from './components/DDayCounter';
import Card from './components/Card'; 
import Menu from './components/Menu';
import Footer from './components/Footer'
import Map from './components/Map'
import Vision from './components/Vision'
import History from './components/History'
import Booth from './components/Booth'
import QandA from './components/QandA'
import Plan from './components/Plan'
import Church from './components/Church'
import MarketFour from './components/MarketFour'
import Loading from './components/Loading'

import boothImage from './assets/image.jpg';
import churchImage from './assets/church.png';
import VisionImage from './assets/main/main-1.jpg';
import HistoryImage from './assets/main/main-2.jpg';
import planImage from './assets/target.png';
import QandAImage from './assets/QandA.png';
import main1 from './assets/main/main-1.jpg';
import main2 from './assets/main/main-2.jpg';
import main3 from './assets/main/main-3.jpg';

// 홈 컴포넌트
function Home() {
  // 메뉴 열림/닫힘 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  }

  // 이미지 프리로딩
  useEffect(() => {
    const images = [
      VisionImage,
      churchImage,
      boothImage,
      QandAImage,
      HistoryImage,
      planImage,
      // HeroSection의 main 이미지들
      main1,
      main2,
      main3
    ];

    let loadedCount = 0;
    const totalImages = images.length;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        // 모든 이미지가 로드되면 0.5초 후에 로딩 완료
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    images.forEach(src => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // 에러가 발생해도 로딩 완료로 처리
      img.src = src;
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='app-container'>
      {/* 헤더 영역 */}
      <Header onMenuToggle={toggleMenu} />

      {/* 메인 타이틀 & D-Day 영역*/}
      <HeroSection />

      {/* 하단 카드 영역 */}
      <div className='content-cards'>
        <Card 
          title="에셀 마켓 소개"
          description="에셀 마켓의 의미와 비전을 소개합니다"
          imageUrl={VisionImage}
          linkTo="/vision"
        />
        <Card 
          title="교회 소개"
          description="시흥순복음교회와 교회의 비전을 소개합니다"
          imageUrl={churchImage}
          linkTo="/church"
        />
        <Card 
          title="부스 안내"
          description="에셀 마켓의 다양한 부스 정보를 확인해보세요"
          imageUrl={boothImage}
          linkTo="/booth"
        />
        <Card 
          title="Q&A"
          description="자주 묻는 질문을 확인해보세요"
          imageUrl={QandAImage}
          linkTo="/qanda"
        />
        <Card 
          title="지난 에셀 마켓"
          description="지난 에셀 마켓의 기록을 확인해보세요"
          imageUrl={HistoryImage}
          linkTo="/history"
        />
        <Card 
          title="에셀 계획"
          description="앞으로 에셀 마켓의 계획"
          imageUrl={planImage}
          linkTo="/plan"
        />
      </div>

      <Menu 
        isOpen = {isMenuOpen}
        onClose = {toggleMenu}
      />
      <Map />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/history" element={<History />} />
      <Route path="/booth" element={<Booth />} />
      <Route path="/qanda" element={<QandA />} />
      <Route path="/church" element={<Church />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/marketfour" element={<MarketFour />} />
    </Routes>
  );
}

export default App