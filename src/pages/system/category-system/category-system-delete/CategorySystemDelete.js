import React from 'react';

import './category-system-delete.scss'


const CategorySystemDelete = ({category, removeSystem}) => {

    return (
        <div className="system__delete">
            {category.map((item, i) => (
                <div key={i} className="system__delete-wrapper">
                    <div className="system__delete-item">{item[0]} - {item[1]}</div>
                    <button onClick={(e) => removeSystem(e, item[0])}>Удалить</button>
                </div>
            ))}
        </div>
    );
};

export default CategorySystemDelete;