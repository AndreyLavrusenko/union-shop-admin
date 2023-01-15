import React from 'react';
import {adminDeleteCardAPI} from "../../../../api/api";

const ShowDetails = ({product, isUpdateDelete}) => {
    const {title_product, color, size, count, price, id} = product

    const deleteItem = async (id) => {
        if (window.confirm("Вы действительно хотите удалить товар?")) {
            await adminDeleteCardAPI.deleteProductItem(id)
            isUpdateDelete(prev => !prev)
        }
    }

    return (
        <>
            <input value={title_product} readOnly name="productName" type="text"
                   placeholder={"Название товара"} className="card__product-input"/>

            <div className="card__product-color">
                <div className="input-color-container">
                    <input value={color} readOnly className="input-color" type="color"/>
                </div>
                <label className="input-color-label" htmlFor="input-color">
                    Цвет товара
                </label>
            </div>

            <div className="card__product-size">
                <label className="input-color-label" htmlFor="input-color">
                    Размер товара
                </label>
                <div className="card__product-sizeRadio">

                    <div className="form_radio_btn">
                        <input readOnly id={size} type="radio" checked name={size} value="size"/>
                        <label htmlFor={size}>{size}</label>
                    </div>

                </div>
            </div>

            <input value={count} readOnly style={{marginTop: '15px'}} className="card__product-input"/>
            <input value={price} readOnly className="card__product-input"/>

            <button className={"card__product-delete"} onClick={() => deleteItem(id)}>Удалить</button>

        </>
    );
};

export default ShowDetails;