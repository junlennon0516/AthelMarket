import React, { useState, useEffect } from 'react';
import './DDay.css'; 
import './font.css';

// 목표 D-Day 설정: 2025년 10월 25일 00시 00분 00초
const TARGET_DATE = new Date('2025-10-25T00:00:00').getTime();

// 남은 일수를 계산하는 함수
const calculateDaysLeft = () => {
    // 현재 시간
    const now = new Date().getTime();
    // 목표 시간까지 남은 시간
    const difference = TARGET_DATE - now;

    if (difference > 0) {
        return Math.floor(difference / (1000 * 60 * 60 * 24));
    } else {
        // D-Day가 지났을 경우 0으로 설정
        return 0;
    }
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
            <span className="time-value">D-{formatNumber(daysLeft)}</span>
        </div>
    );
}

export default DDay;
