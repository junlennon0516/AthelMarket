import React from "react";
import {Link} from 'react-router-dom';
import './Card.css';
import './font.css';

function Card({ title, description, imageUrl, linkTo}) {
    return (
        <Link to={linkTo} className="card-link">
            <div className="card-container">
                <div className="card-image-area" style={{ backgroundImage: `url(${imageUrl})`}}>
                </div>
                <div className="card-content">
                    <h2 className="card-title noto-sans-kr-bold">{title}</h2>
                    <p className="card-description noto-sans-kr-medium">{description}</p>
                </div>
                
                {/*<span className="view-tag">CLICK</span>*/}
            </div>
        </Link>
    );
}

export default Card;