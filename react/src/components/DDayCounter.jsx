import React, { useState, useEffect } from 'react';
import './DDayCounter.css'; 
import './font.css';

// 남은 시간을 일, 시, 분, 초로 계산하는 함수
const calculateTimeLeft = () => {
    // 현재 날짜와 시간
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
    
    // 목표 날짜까지 남은 시간 계산 (밀리초)
    const timeDiff = nextSaturday.getTime() - now.getTime();
    
    let timeLeft = {};
    
    if (timeDiff > 0) {
        timeLeft = {
            D: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
            H: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
            M: Math.floor((timeDiff / 1000 / 60) % 60),
            S: Math.floor((timeDiff / 1000) % 60)
        };
    } else {
        // D-Day가 지났을 경우 0으로 설정
        timeLeft = { D: 0, H: 0, M: 0, S: 0 };
    }

    return timeLeft;
};

// 숫자를 두 자리 문자열로 포맷하는 함수 (예: 5 -> '05')
const formatNumber = (num) => String(num).padStart(2, '0');

function DDayCounter() {
    // 남은 시간을 상태로 관리
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    // 1초마다 남은 시간을 업데이트
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // 컴포넌트가 언마운트될 때 타이머 정리
        return () => clearTimeout(timer);
    });

    // 화면에 표시할 데이터 배열
    const DDayDisplay = [
        { label: 'D', value: formatNumber(timeLeft.D) },
        { label: 'H', value: formatNumber(timeLeft.H) },
        { label: 'M', value: formatNumber(timeLeft.M) },
        { label: 'S', value: formatNumber(timeLeft.S) }
    ];

    return (
        <div className="dday-counter-container">
            {DDayDisplay.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="time-block">
                        {/* 계산된 남은 시간 표시 */}
                        <span className="time-value">{item.value}</span>
                    </div>

                    {/* 마지막 요소가 아니면 구분자 (콜론) 추가 */}
                    {index < DDayDisplay.length - 1 && (
                        <span className="separator">:</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default DDayCounter;