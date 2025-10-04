import { useState } from 'react'
import './App.css';
import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import DDayCounter from './components/DDayCounter';
import Card from './components/Card'; 
import Menu from './components/Menu';
import Map from './components/Map'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app-container'>
      {/* 헤더 영역 */}
      <Header />

    {/* 메인 타이틀 & D-Day 영역*/}
      <HeroSection />

      {/* 하단 카드 영역 */}
      <div className='content-cards'>
        <Card 
          title="에셀 소개"
          description="에셀 마켓의 의미"
          imageUrl="/assets/jik.jpg" 
          linkTo="/Header"
        />
        <Card 
          title="에셀 소개"
          description="에셀 마켓의 의미"
          imageUrl="/assets/jik.jpg" 
          linkTo="/Header"
        />
        <Card 
          title="부스"
          description="에셀 마켓의 의미"
          imageUrl="/assets/jik.jpg" 
          linkTo="/Header"
        />
        <Card 
          title="에셀 소개"
          description="에셀 마켓의 의미"
          imageUrl="/assets/jik.jpg" 
          linkTo="/Header"
        />
      </div>

      <Menu />
      <Map />
      <Footer />
    </div>
  );
}

export default App