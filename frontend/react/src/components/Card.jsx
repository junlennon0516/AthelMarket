import React from "react";
import {Link} from 'react-router-dom';
import './Card.css';

function Card({ title, description, imageUrl, linkTo}) {
    return (
        <Link to={linkTo} className="card-link">
            <div className="card-container">
                <div className="card-image-area" style={{ backgroundImage: `url(${imageUrl})`}}>
                </div>
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                </div>
                
                <span className="view-tag">VIEW</span>
            </div>
        </Link>
    );
}

export default Card;