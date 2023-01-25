import React, {useEffect, useState} from 'react';
import {adminGetProduct, adminUpdateCardAPI} from "../../api/api";
import CreateTitle from "../../components/create/title/create-title/CreateTitle";
import EditMainInfoCard from "../../components/edit-main-info-card/EditMainInfoCard";

import '../../components/create/create-card/create-card-input/create-card-input.scss'
import {useNavigate} from "react-router-dom";


const EditMainProduct = () => {
    const id = localStorage.getItem("uniqCode")
    const [product, setProduct] = useState([])
    const [productInfo, setProductInfo] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        const getProductById = async () => {
            const res = await adminGetProduct.getProductById(id)
            setProduct(res.data.result[0])
        }

        getProductById()
    }, [])


    useEffect(() => {
        setProductInfo( {
            title: product.title,
            description: product.description,
            categories: product.categories,
            category_type: product.category_type,
            color: product.color,
            backgroundcolor: product.backgroundcolor,
            subColor: product.subColor,
            isLogo: product.isLogo,
            recommend: product.recommend,
            about: product.about,
            sizeGrid: product.sizeGrid,
        })
    }, [product])

    const onChange = e => {
        const value =  e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setProductInfo({...productInfo, [e.target.name]: value})
    }

    const onSaveChangedProduct = e => {
        e.preventDefault()

        adminUpdateCardAPI.updateCardProduct(id, productInfo)
            .then(res => {
                if (res.data.resultCode === 0) {
                    alert("Данные обновлены")
                    navigate('/')
                } else {
                    alert("Произошла ошибка")
                }
            })
    }


    return (
        <>
            <CreateTitle title="Основные данные" subtitle="Измените информацию о товаре" />

            <div className="create__card-details" style={{marginTop: '70px'}}>
                <form className="card__product-form">
                    <EditMainInfoCard onSaveChangedProduct={onSaveChangedProduct} productInfo={productInfo} onChange={onChange} />
                </form>
            </div>
        </>
    );
};

export default EditMainProduct;