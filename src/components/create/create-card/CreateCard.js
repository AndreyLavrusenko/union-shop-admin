import React from 'react';
import CreateCardImage from "./create-card-image/CreateCardImage";
import CreateCardInput from "./create-card-input/CreateCardInput";

import './create-card.scss'


const CreateCard = () => {
    return (
        <div className="card__product">
            <CreateCardImage />
            <CreateCardInput />
        </div>
    );
};

export default CreateCard;