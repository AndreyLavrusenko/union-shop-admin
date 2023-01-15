import React from 'react';
import './choice-card.scss'
import {NavLink} from "react-router-dom";

const ChoiceCard = ({title, bgColor, color, subtitle, img, fontSize, link}) => {
    return (
        <NavLink
            to={link}
            className="choice__card"
            style={bgColor === "#1468E7"
                ? {backgroundColor: bgColor, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}
                : {backgroundColor: bgColor}}
        >
            <div className="choice__card-container">
                <h2 style={fontSize ? {fontSize: fontSize, color: color} : {color: color}}>{title}</h2>
                <p style={{color: color}}>{subtitle}</p>

                <img src={img} alt=""/>
            </div>
        </NavLink>
    );
};

export default ChoiceCard;