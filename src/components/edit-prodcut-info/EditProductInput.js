import React, {useState} from 'react';
import {adminUpdateCardAPI} from "../../api/api";


const EditProductInput = ({product, index}) => {

    const [productInfo, setProductInfo] = useState({
        productName: product.title_product ? product.title_product : "",
        productColor: product.color ? product.color : "",
        productSize: product.size ? product.size : "",
        productPrice: product.price ? product.price : 0,
        productCount: product.count ? product.count : 0
    })
    const [isChanged, setIsChanged] = useState(false)


    const onChange = e => {
        if (e.target.type === 'radio') {
            setProductInfo({...productInfo, ['productSize']: e.target.value})
        } else {
            const value =  e.target.value;
            setProductInfo({...productInfo, [e.target.name]: value})
        }
        setIsChanged(true)
    }

    const saveChange = async (e) => {
        e.preventDefault()

        await adminUpdateCardAPI.updateProductItemInfo(product.id, productInfo)
            .then(res => {
                if (res.data.resultCode === 0) {
                    setIsChanged(false)
                }
            })

    }

    const productSizeArr = ['XXS', "XS", "S", "M", "L", "XL"]


    return (
        <>
            <input value={productInfo.productName} name={'productName'} onChange={onChange} type="text" required
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
                    {productSizeArr.map((item, i) => (
                        <div className="form_radio_btn" key={i}>
                            {productInfo.productSize === item
                                ? <input onChange={onChange} checked id={item + index} type="radio" value={item} />
                                : <input onChange={onChange} id={item + index} type="radio" value={item} />
                            }
                            <label htmlFor={item + index}>{item}</label>
                        </div>
                    ))}

                </div>
            </div>

            <input value={productInfo.productPrice} onChange={onChange} name="productPrice" type="number"
                   style={{marginTop: '15px'}} min={0} required placeholder={"Цена товара"} className="card__product-input"/>
            <input value={productInfo.productCount} onChange={onChange} name="productCount" type="number" required
                   placeholder={"Штук в наличии"} min={0} className="card__product-input"/>

            <button
                type="submit"
                onClick={saveChange}
                style={isChanged ? {backgroundColor: 'red'} : {backgroundColor: "#1468E7"}}
            >Сохранить</button>

        </>
    )
};

export default EditProductInput;