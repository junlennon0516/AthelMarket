import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
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
import axios from 'axios';

import jikImage from './assets/image.jpg';

// 홈 컴포넌트
function Home() {
  // 메뉴 열림/닫힘 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 백엔드에서 받아온 데이터를 저장할 state
  const [backendMessage, setBackendMessage] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  }

  // 백엔드 API 연동 테스트
  useEffect(() => {
    // 백엔드 API를 호출
    axios.get('http://localhost:8080/api/hello')
      .then(response => {
        // 성공적으로 데이터를 받아오면 message state를 업데이트
        setBackendMessage(response.data.message);
      })
      .catch(error => {
        console.error("데이터를 불러오는 중 에러 발생!", error);
        setBackendMessage('백엔드 연결 실패');
      });
  }, []); // 빈 배열을 전달하여 최초 렌더링 시에만 실행되도록 설정

  return (
    <div className='app-container'>
      {/* 헤더 영역 */}
      <Header onMenuToggle={toggleMenu} />

      {/* 메인 타이틀 & D-Day 영역*/}
      <HeroSection />

      {/* 백엔드 연동 테스트 영역 */}
      <div style={{ 
        padding: '20px', 
        margin: '20px', 
        backgroundColor: '#f0f0f0', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h2>백엔드 연동 테스트</h2>
        <p>백엔드에서 받은 메시지: <strong>{backendMessage}</strong></p>
      </div>

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
    </Routes>
  );
}

export default App