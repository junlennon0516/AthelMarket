import React from 'react';
import './Loading.css';
import './font.css';

function Loading() {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text noto-sans-kr-bold">Loading...</p>
        </div>
    );
}

export default Loading;
