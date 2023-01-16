import React, {useEffect, useState} from 'react';
import {adminGetProduct, adminUpdateCardAPI} from "../../api/api";
import {NavLink} from "react-router-dom";


const AddToTop = () => {
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


    const addToTop = async () => {
        await adminUpdateCardAPI.updateTopState(id, 1)
            .then(res => {
                if (res.data.resultCode === 0) {
                    setAdded(prev => !prev)
                }
            })
    }


    const removeFromTop = async () => {
        await adminUpdateCardAPI.updateTopState(id, 0)
            .then(res => {
                if (res.data.resultCode === 0) {
                    setAdded(prev => !prev)
                }
            })
    }

    return (
        <div className="open__access">
            <h2>{product.isTop === 0 ? "Добавление товара в топ" : "Удаление товара из топа"}</h2>

            <div style={{backgroundColor: product.backgroundcolor}} className="open__access-card">
                <div className="open__access-content">
                    <h3 style={{color: product.color}}>{product.title}</h3>
                    <p style={{color: product.subColor}}>{product.description}</p>
                    <div className="open__access-wrapper">
                        <img src={process.env.REACT_APP_BACK_URL + product.image} alt=""/>
                    </div>
                </div>
            </div>

            {product.isTop === 0 ? <button onClick={addToTop}>Добавить в топ</button> : <button onClick={removeFromTop}>Убрать из топа</button>}
            <NavLink style={{backgroundColor: "#1468E7", top: '200px', border: "none"}} to={"/create-list-product"}>На главную</NavLink>


        </div>
    );
};

export default AddToTop;