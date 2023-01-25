import React, {useState} from 'react';

const EditMainInfoCard = ({productInfo, onChange, onSaveChangedProduct}) => {
    if (!productInfo) return

    return (
        <>
            <input value={productInfo.title} onChange={onChange} name="title" type="text" required
                   placeholder={"Название товара"} className="card__product-input"/>

            <input value={productInfo.description} onChange={onChange} name="description" type="text" required
                   placeholder={"Описание товара"} className="card__product-input"/>

            <div className="card__product-color">
                <div className="input-color-container">
                    <input name={"color"} value={productInfo.color} onChange={onChange} id="input-color" className="input-color" type="color"/>
                </div>
                <label className="input-color-label" htmlFor="input-color">
                    Цвет текста на карточке
                </label>
            </div>

            <div className="card__product-color">
                <div className="input-color-container">
                    <input name={"backgroundcolor"} value={productInfo.backgroundcolor} onChange={onChange} id="input-color2" className="input-color" type="color"/>
                </div>
                <label className="input-color-label" htmlFor="input-color2">
                    Цвет заднего фона карточки
                </label>
            </div>

            <div className="card__product-color">
                <div className="input-color-container">
                    <input name={"subColor"} value={productInfo.subColor} onChange={onChange} id="input-color3" className="input-color" type="color"/>
                </div>
                <label className="input-color-label" htmlFor="input-color3">
                    Цвет нижнего текста на карточке
                </label>
            </div>

            <input value={productInfo.categories} onChange={onChange} name="categories" type="text" required
                   placeholder={"Описание товара"} className="card__product-input"/>

            <input value={productInfo.category_type} onChange={onChange} name="category_type" type="text" required
                   placeholder={"Описание товара"} className="card__product-input"/>

            <div className="checkbox" style={{marginTop: 0}}>
                <input name={"isLogo"} value={productInfo.isLogo} checked={productInfo.isLogo} onChange={onChange} className="custom-checkbox" type="checkbox" id="isLogo" />
                <label htmlFor="isLogo">Виден ли логотип</label>
            </div>

            <label style={{fontWeight: 300}} className="card__product-textarea" htmlFor="">О товаре<br/>
                <textarea style={{fontWeight: 300}} name={"about"} value={productInfo.about} onChange={onChange} />
            </label>

            <label style={{fontWeight: 300}} className="card__product-textarea" htmlFor="">Рекомендации по уходу<br/>
                <textarea style={{fontWeight: 300}} name={"recommend"} value={productInfo.recommend} onChange={onChange} />
            </label>

            <label style={{fontWeight: 300}} className="card__product-textarea" htmlFor="">Размерная сетка<br/>
                <textarea style={{fontWeight: 300}} name={"sizeGrid"} value={productInfo.sizeGrid} onChange={onChange} />
            </label>

            <button onClick={onSaveChangedProduct} type="submit">Сохранить</button>

        </>
    );
};

export default EditMainInfoCard;