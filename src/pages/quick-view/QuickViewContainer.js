import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import QuickView from "./QuickView";
import {adminGetProduct} from "../../api/api";

const QuickViewContainer = () => {
    // Получение id из адресной строки
    const id = localStorage.getItem("uniqCode");

    const [productData, setProductData] = useState(null)
    const [productInfo, setProductInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProduct = async () => {
            const {data} = await adminGetProduct.getProductById(id)

            setProductData(data.result[0])
            setProductInfo(data.info_result)

            setLoading(false)
        }
        getProduct()
    }, [id])


    return (
        <QuickView
            loading={loading}
            productData={productData}
            productInfo={productInfo}
        />
    );
};

export default QuickViewContainer;