import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import DDayCounter from './components/DDayCounter';
import Card from './components/Card'; 
import Menu from './components/Menu';
import Map from './components/Map'
import Footer from './components/Footer'
import Vision from './components/Vision'
import History from './components/History'
import Booth from './components/Booth'
import QandA from './components/QandA'
import Plan from './components/Plan'
import Church from './components/Church'
import MarketFour from './components/MarketFour'

import jikImage from './assets/image.jpg';

// 홈 컴포넌트
function Home() {
  // 메뉴 열림/닫힘 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
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
          title="에셀 소개"
          description="에셀 마켓의 의미와 비전을 소개합니다"
          imageUrl={jikImage}
          linkTo="/vision"
        />
        <Card 
          title="지난 에셀 마켓"
          description="지난 에셀 마켓의 기록을 확인해보세요"
          imageUrl={jikImage}
          linkTo="/history"
        />
        <Card 
          title="부스 안내"
          description="에셀 마켓의 다양한 부스 정보를 확인해보세요"
          imageUrl={jikImage}
          linkTo="/booth"
        />
        <Card 
          title="Q&A"
          description="자주 묻는 질문을 확인해보세요"
          imageUrl={jikImage}
          linkTo="/qanda"
        />
        <Card 
          title="교회 소개"
          description="시흥순복음교회"
          imageUrl={jikImage}
          linkTo="/church"
        />
        <Card 
          title="에셀 계획"
          description="앞으로 에셀 마켓의 계획"
          imageUrl={jikImage}
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