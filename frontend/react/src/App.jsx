import { useState } from 'react'
import './App.css';
import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import DDayCounter from './components/DDayCounter';
import Card from './components/Card'; 
import Menu from './components/Menu';

function App() {
  return (
    <div className='app-container'>
      {/* 헤더 영역 */}
      <Header />

    {/* 메인 타이틀 & D-Day 영역*/}
      <HeroSection />

      {/* 하단 카드 영역 */}
      <div className='content-cards'>
        <Card />
        <Card />
        <Card />
      </div>

      <Menu />
    </div>
  );
}

export default App