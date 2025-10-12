import React, { useEffect, useState } from "react";
import './Header.css';
import './font.css';

function Header({ onMenuToggle }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-left">
            <span className="title noto-sans-kr-bold">
                Athel Market
            </span>
        </div>
        <div className="header-right">
            <div className="menu-icon" onClick={onMenuToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    </div>
    )
}

export default Header;