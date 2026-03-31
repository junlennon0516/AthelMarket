import React from 'react';
import './BoothNotice.css';
import './font.css';

function BoothNotice() {
    return (
        <section className="booth-notice-card">
            <p className="booth-notice-badge noto-sans-kr-bold">안내 예정</p>
            <h3 className="booth-notice-title noto-sans-kr-bold">부스 상세 정보는 추후 공개됩니다.</h3>
            <p className="booth-notice-description noto-sans-kr-medium">
                더 알찬 구성으로 준비 중입니다.<br />
                업데이트 소식은 메인 화면과 안내 페이지에서 확인해주세요.
            </p>
        </section>
    );
}

export default BoothNotice;
