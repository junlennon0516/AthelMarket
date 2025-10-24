import React, { useState, useEffect } from 'react';
import './DDay.css'; 
import './font.css';

// 남은 일수를 계산하는 함수
const calculateDaysLeft = () => {
    // 현재 날짜
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // 다음 토요일 찾기 (0=일요일, 6=토요일)
    const nextSaturday = new Date(today);
    const daysUntilSaturday = (6 - today.getDay()) % 7;
    
    // 만약 오늘이 토요일이라면 다음 주 토요일로 설정
    if (daysUntilSaturday === 0) {
        nextSaturday.setDate(today.getDate() + 7);
    } else {
        nextSaturday.setDate(today.getDate() + daysUntilSaturday);
    }
    
    // 목표 날짜까지 남은 일수 계산
    const timeDiff = nextSaturday.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    return Math.max(0, daysLeft);
};

// 숫자를 두 자리 문자열로 포맷하는 함수 (예: 5 -> '05')
const formatNumber = (num) => String(num).padStart(2, '0');

function DDay() {
    // 남은 일수를 상태로 관리
    const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());
    
    // 1초마다 남은 일수를 업데이트
    useEffect(() => {
        const timer = setTimeout(() => {
            setDaysLeft(calculateDaysLeft());
        }, 1000);

        // 컴포넌트가 언마운트될 때 타이머 정리
        return () => clearTimeout(timer);
    });

    return (
        <div className="time-block">
            {/* 계산된 남은 일수 표시 */}
            <span className="time-value">D-DAY</span>
        </div>
    );
}

export default DDay;
