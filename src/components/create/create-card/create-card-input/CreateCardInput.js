import React from 'react';
import './create-card-input.scss'

const CreateCardInput = ({productInfo, onChange, loadArrImageSize, uploadedFilesSize}) => {
    return (
        <div className="card__product-form">
            <input type="text" name={"name"} value={productInfo.name} onChange={onChange} placeholder={"Название товара"} className="card__product-input"/>
            <input type="text" name={"description"} value={productInfo.description} onChange={onChange} placeholder={"Описание товара"} className="card__product-input"/>
            {/*<input type="text" name={"category"} value={productInfo.category} onChange={onChange} placeholder={"Категория товара"} className="card__product-input"/>*/}
            <input type="text" name={"exactCategory"} value={productInfo.exactCategory} onChange={onChange} placeholder={"Точная категория"} className="card__product-input"/>

            <div className="card__product-color">
                <div className="input-color-container">
                    <input name={"cardColor"} value={productInfo.cardColor} onChange={onChange} id="input-color" className="input-color" type="color"/>
                </div>
                <label className="input-color-label" htmlFor="input-color">
                    Цвет текста на карточке
                </label>
            </div>

            <div className="card__product-color">
                <div className="input-color-container">
                    <input name={"subtitleColor"} value={productInfo.subtitleColor} onChange={onChange} id="input-color1" className="input-color" type="color"/>
                </div>
                <label className="input-color-label" htmlFor="input-color1">
                    Цвет нижнего текста на карточке
                </label>
            </div>

            <div className="card__product-color">
                <div className="input-color-container">
                    <input name={"titleColor"} value={productInfo.titleColor} onChange={onChange} id="input-color2" className="input-color" type="color"/>
                </div>
                <label className="input-color-label" htmlFor="input-color2">
                    Цвет карточки
                </label>
            </div>

            <div className="checkbox">
                <input name={"isLogo"} value={productInfo.isLogo} onChange={onChange} className="custom-checkbox" type="checkbox" id="isLogo" />
                <label htmlFor="isLogo">Виден ли логотип</label>
            </div>

            <label className="card__product-textarea" htmlFor="">О товаре<br/>
                <textarea name={"about"} value={productInfo.about} onChange={onChange} />
            </label>

            <label className="card__product-textarea" htmlFor="">Рекомендации по уходу<br/>
                <textarea name={"recommendation"} value={productInfo.recommendation} onChange={onChange} />
            </label>

            <label className="card__product-textarea" htmlFor="">Размерная сетка<br/>
                <textarea name={"sizeGrid"} value={productInfo.sizeGrid} onChange={onChange} />
            </label>

            <label className="input-file-deps">
                <div>
                    <input onChange={loadArrImageSize} multiple type="file" name="file" />
                    <span>Дополнительные файлы</span>
                </div>
                <div className="input-deps">
                    <div className="card__product-round"/>
                    <div className="card__product-sizePreview">
                        {uploadedFilesSize.map(img => (
                            <img src={URL.createObjectURL(img)} alt=""/>
                        ))}
                    </div>
                </div>
            </label>
            <button type="submit">Продолжить</button>
        </div>
    );
};

export default CreateCardInput;