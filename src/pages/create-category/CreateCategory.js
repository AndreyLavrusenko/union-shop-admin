import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import CreateTitle from "../../components/create/title/create-title/CreateTitle";

import './create-category.scss'


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
                <div className="create-category-items" onClick={e => setSelectedButton(e.target.value)}>
                    <button value="clothes">Одежда</button>
                    <button value="accessories">Аксессуары</button>
                    <button value="interior">Интерьер</button>
                    <button value="books">Книги</button>
                    <button value="technics">Техника</button>
                    <button value="other">Другое</button>
                </div>
            </div>
            {selectedButton ? <button onClick={saveData} className="create-category-button">Продолжить</button> : null}

        </>
    );
};

export default CreateCategory;