import React from 'react';
import '../create-title.scss'

const CreateTitle = ({title, subtitle}) => {
    return (
        <div className="create-title">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};

export default CreateTitle;