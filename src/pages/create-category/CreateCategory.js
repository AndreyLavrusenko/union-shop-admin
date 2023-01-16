import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import CreateTitle from "../../components/create/title/create-title/CreateTitle";

import './create-category.scss'
import {adminGetProduct} from "../../api/api";


const CreateCategory = () => {
    const [selectedButton, setSelectedButton] = useState('')
    const [category, setCategory] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const getAllCategory = async () => {
            const {data} = await adminGetProduct.getProductCategory()
            setCategory(JSON.parse(data[0].allCategory))
        }

        getAllCategory()
    }, [])

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
                    {category.map((item, index) => (
                        <button value={item[0]} key={index}>{item[1]}</button>
                    ))}
                </div>
            </div>
            {selectedButton ? <button onClick={saveData} className="create-category-button">Продолжить</button> : null}

        </>
    );
};

export default CreateCategory;