import React from "react";
import './Header.css';

function Header() {
    return (
      <div className="header-container">
        <div className="header-left">
            <span className="title">
                Ethel Market
            </span>
        </div>
        <div className="heder-right">
            <div className="menu-icon">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    </div>
    )
}

export default Header;