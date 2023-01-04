import React from 'react';
import './create-card-input.scss'

const CreateCardInput = () => {
    return (
        <form className={"card__product-form"}>
            <input type="text" placeholder={"Категория товара"} className="card__product-input"/>
            <input type="text" placeholder={"Название товара"} className="card__product-input"/>
            <input type="text" placeholder={"Описание товара"} className="card__product-input"/>
            <input type="text" placeholder={"Точная категория"} className="card__product-input"/>

            <div className="card__product-color">
                <div className="input-color-container">
                    <input id="input-color" value="#ed6868" className="input-color" type="color"/>
                </div>
                <label className="input-color-label" htmlFor="input-color">
                    Цвет текста на карточке
                </label>
            </div>

            <div className="card__product-color">
                <div className="input-color-container">
                    <input id="input-color1" value="#734AEE" className="input-color" type="color"/>
                </div>
                <label className="input-color-label" htmlFor="input-color1">
                    Цвет нижнего текста на карточке
                </label>
            </div>

            <div className="card__product-color">
                <div className="input-color-container">
                    <input id="input-color2" value="#DF3F3F" className="input-color" type="color"/>
                </div>
                <label className="input-color-label" htmlFor="input-color2">
                    Цвет карточки
                </label>
            </div>

            <div className="checkbox">
                <input className="custom-checkbox" type="checkbox" id="isLogo" name="logo" />
                <label htmlFor="isLogo">Виден ли логотип</label>
            </div>

            <label className="card__product-textarea" htmlFor="">О товаре<br/>
                <textarea></textarea>
            </label>

            <label className="card__product-textarea" htmlFor="">Рекомендации по уходу<br/>
                <textarea></textarea>
            </label>

            <label className="card__product-textarea" htmlFor="">Размерная сетка<br/>
                <textarea></textarea>
            </label>

            <label className="input-file-deps">
                <div>
                    <input type="file" name="file" />
                    <span>Дополнительные файлы</span>
                </div>
                <div className="card__product-round"></div>
            </label>
        </form>
    );
};

export default CreateCardInput;