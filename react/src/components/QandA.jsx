import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './QandA.css';
import './font.css';

function QandA() {
    const [openFAQ, setOpenFAQ] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            id: 1,
            question: "에셀 마켓은 언제 열리나요?",
            answer: "2025년 10월 25일(토)에 개최됩니다."
        },
        {
            id: 2,
            question: "참여 방법은 어떻게 되나요?",
            answer: "별도의 사전 신청 없이 현장에서 자유롭게 참여하실 수 있습니다."
        },
        {
            id: 3,
            question: "부스 운영 시간은 어떻게 되나요?",
            answer: "오후 2시부터 오후 5시 30분까지 운영됩니다."
        },
        {
            id: 4,
            question: "주차는 가능한가요?",
            answer: "주차장이 따로 마련되어 있지 않습니다. 주변 아파트나 공용주차장을 사용하시거나 대중교통 또는 도보이동 해주시기 바랍니다."
        },
        {
            id: 5,
            question: "부스 이용시 결제는 어떻게 하나요?",
            answer: "신용카드 거래 불가능하고 계좌이체 또는 현금결제만 가능합니다."
        },
        {
            id: 6,
            question: "다음 에셀 마켓은 언제 개최하나요?",
            answer: "다음 에셀 마켓 일정이 확정될 때마다 해당 사이트의 '에셀 계획' 페이지에 공지할 예정입니다."
        }
    ];

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="qanda-container">
            {/* 헤더 */}
            <header className="qanda-header">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
                    </svg>
                </Link>
                <h1 className="qanda-header-title noto-sans-kr-bold">Q&A</h1>
                <div className="header-spacer"></div>
            </header>

            {/* 메인 콘텐츠 */}
            <div className="qanda-content">
                <div className="qanda-text">
                    <h2>자주 묻는 질문</h2>
                    <p>에셀 마켓에 대한 궁금한 점들을 확인해보세요.</p>
                    
                    <div className="faq-section">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="faq-item">
                                <button 
                                    className="faq-question"
                                    onClick={() => toggleFAQ(faq.id)}
                                >
                                    <span>{faq.question}</span>
                                    <span className={`faq-icon ${openFAQ === faq.id ? 'open' : ''}`}>
                                        +
                                    </span>
                                </button>
                                {openFAQ === faq.id && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <div className="contact-info">
                        <span className="contact-label noto-sans-kr-bold">기타 문의</span>
                        <span className="contact-phone noto-sans-kr-bold">T. 031-317-5017</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QandA;


