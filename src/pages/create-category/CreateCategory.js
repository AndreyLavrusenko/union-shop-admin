import React, {useState} from 'react';
import CreateTitle from "../../components/create/title/create-title/CreateTitle";

import './create-category.scss'
import {useNavigate} from "react-router-dom";

const CreateCategory = () => {
    const [selectedButton, setSelectedButton] = useState('')
    const navigate = useNavigate()

    const data = {
        category: selectedButton
    }

    const saveData = () => {
        localStorage.setItem("newProduct", JSON.stringify(data))
        navigate('/create-product')
    }

    return (
        <>
            <CreateTitle title={"Категория Товара"} subtitle={"Выберите  категорию товара"}/>

            <div className="create-category">
                <div className="create-category-items" onClick={e => setSelectedButton(e.target.innerHTML)}>
                    <button>Одежда</button>
                    <button>Аксессуары</button>
                    <button>Интерьер</button>
                    <button>Книги</button>
                    <button>Техника</button>
                    <button>Другое</button>
                </div>
            </div>
            {selectedButton ? <button onClick={saveData} className="create-category-button">Продолжить</button> : null}

        </>
    );
};

export default CreateCategory;