import React from "react";
import './Menu.css'
import './font.css'
import { Link } from "react-router-dom";

const menuItems = [
    { name: "에셀 비전", path: "/vision" },
    { name: "교회 소개", path: "/church" },
    { name: "에셀 계획", path: "/plan" },
    { name: "지난 에셀 마켓", path: "/history" },
    { name: "부스 안내", path: "/booth" },
    { name: "Q&A", path: "/qanda" }
];

function Menu({ isOpen, onClose }) {
    const handleCloseAndNavigate = () => {
        onClose();
    };

    return (
        <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
                <Link to="/" onClick={handleCloseAndNavigate} className="close-button-link">
                    <button className="close-button">
                    &times;
                    </button>
                </Link>

                <div className="menu-list">
                    {menuItems.map((item, index) => (
                        <Link 
                            key={index} 
                            to={item.path} 
                            className="menu-item noto-sans-kr-medium"
                            onClick={handleCloseAndNavigate}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Menu;