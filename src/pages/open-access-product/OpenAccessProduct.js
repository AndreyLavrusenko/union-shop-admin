import React, {useEffect, useState} from 'react';
import {adminGetProduct} from "../../api/api";
import {NavLink} from "react-router-dom";

import './open-access-product.scss'


const OpenAccessProduct = () => {
    const id = localStorage.getItem("uniqCode")
    const [product, setProduct] = useState([])
    const [isAdded, setAdded] = useState(false)

    useEffect(() => {
        const getProductById = async () => {
            const res = await adminGetProduct.getProductById(id)
            setProduct(res.data.result[0])
        }

        getProductById()
    }, [isAdded])


    const openProduct = () => {
        adminGetProduct.updateVisibleTrue(id, 1)
            .then(res => {
                if (res.data.resultCode === 0) {
                    setAdded(prev => !prev)
                }
            })
    }


    return (
        <div className="open__access">
            <h2>Добавление товара в магазин</h2>
            {product.isVisible ? <p>Поздравляем!</p> : null}

            <div style={{backgroundColor: product.backgroundcolor}} className="open__access-card">
                <div className="open__access-content">
                    <h3 style={{color: product.color}}>{product.title}</h3>
                    <p style={{color: product.subColor}}>{product.description}</p>
                    <div className="open__access-wrapper">
                        <img src={process.env.REACT_APP_BACK_URL + product.image} alt=""/>
                    </div>
                </div>
            </div>

            {product.isVisible ? <NavLink style={{backgroundColor: "#1468E7"}} to={"/create-list-product"}>Назад</NavLink> : <button onClick={openProduct}>Добавить товар</button>}


        </div>
    );
};

export default OpenAccessProduct;