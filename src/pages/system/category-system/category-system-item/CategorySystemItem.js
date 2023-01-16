import React, {useState} from 'react';

import stack from "../../../../assets/img/icon/stack.svg";
import not_done from '../../../../assets/img/icon/not_done.svg'
import done from '../../../../assets/img/icon/done(button).svg'


const CategorySystemItem = ({categories_name, categories_desc, category, categoryNumber, number, updateCategory, updateCategoryInfo}) => {
    const [inputName, setInputName] = useState(categories_name)
    const [inputDesc, setInputDesc] = useState(categories_desc)
    const [isUpdated, setIsUpdated] = useState(false)

    const updateNameHandler = (e) => {
        setInputName(e.target.value)
        setIsUpdated(true)
    }

    const updateDescHandler = e => {
        setInputDesc(e.target.value)
        setIsUpdated(true)
    }

    const saveNameAndDescHandler = () => {
        updateCategoryInfo(number, {inputName, inputDesc})
        setIsUpdated(false)
    }

    return (
        <div className="system__block">
            <button onClick={saveNameAndDescHandler} type="button">
                {isUpdated
                    ? <img src={not_done} alt=""/>
                    : <img src={done} alt=""/>
                }

            </button>
            <div>
                <div className="system__input">
                    <label htmlFor="category1">Заголовок Категории {number}</label>
                    <input onChange={updateNameHandler} value={inputName} name={"category1"} type="text"/>
                </div>
                <div className="system__input">
                    <label htmlFor="subcategory1">Подзаголовок {number}</label>
                    <input onChange={updateDescHandler} value={inputDesc} name={"subcategory1"} type="text"/>
                </div>
                <div className="system__category">
                    <h3>Категория {number} <img src={stack} alt=""/></h3>
                    <div className="system__holder">
                        <select size={category.length} className="system__category-item">
                            {category.map((item, i) => {
                                if (item[0] === categoryNumber) {
                                    return <option selected className='system__category-items' key={i}>{item[1]}</option>
                                }
                                return <option onClick={() => updateCategory(number, item[0])} className='system__category-items' key={i}>{item[1]}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategorySystemItem;