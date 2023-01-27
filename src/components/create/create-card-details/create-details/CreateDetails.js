import React from 'react';

const CreateDetails = ({onChange, productInfo}) => {


    return (
        <>
            <input value={productInfo.productName} name="productName" onChange={onChange} type="text" required
                   placeholder={"Название товара"} className="card__product-input"/>

            <div className="card__product-color">
                <div className="input-color-container">
                    <input value={productInfo.productColor} onChange={onChange} name={"productColor"} required
                           id="input-color" className="input-color" type="color"/>
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
                        <input onChange={onChange} id="xxs" type="radio" name="productSize" value="XXS"/>
                        <label htmlFor="xxs">XXS</label>
                    </div>

                    <div className="form_radio_btn">
                        <input onChange={onChange} id="xs" type="radio" name="productSize" value="XS"/>
                        <label htmlFor="xs">XS</label>
                    </div>

                    <div className="form_radio_btn">
                        <input onChange={onChange} id="s" type="radio" name="productSize" value="S"/>
                        <label htmlFor="s">S</label>
                    </div>

                    <div className="form_radio_btn">
                        <input onChange={onChange} id="m" type="radio" name="productSize" value="M"/>
                        <label htmlFor="m">M</label>
                    </div>

                    <div className="form_radio_btn">
                        <input onChange={onChange} id="l" type="radio" name="productSize" value="L"/>
                        <label htmlFor="l">L</label>
                    </div>

                    <div className="form_radio_btn">
                        <input onChange={onChange} id="xl" type="radio" name="productSize" value="XL"/>
                        <label htmlFor="xl">XL</label>
                    </div>

                </div>
            </div>

            <input value={productInfo.productPrice} onChange={onChange} name="productPrice" type="number"
                   style={{marginTop: '15px'}} min={0} required placeholder={"Цена товара"} className="card__product-input"/>
            <input value={productInfo.productCount} onChange={onChange} name="productCount" type="number" required
                   placeholder={"Штук в наличии"} min={0} className="card__product-input"/>

            <button type="submit">Продолжить</button>

        </>
    );
};

export default CreateDetails;