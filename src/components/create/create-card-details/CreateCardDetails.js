import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CreateDetails from "./create-details/CreateDetails";
import ShowDetails from "./show-details/ShowDetails";
import {adminCreateCardAPI} from "../../../api/api";

import '../create-card/create-card-input/create-card-input.scss'
import './create-card-details.scss'

const CreateCardDetails = () => {
    const {id} = useParams();
    const [madeProduct, setMadeProduct] = useState([])
    const [update, setUpdate] = useState(false)

    const [updateDelete, isUpdateDelete] = useState(false)

    useEffect(() => {
        const getMadeProduct = async () => {
            const data = await adminCreateCardAPI.getNewAllProduct(id)
            setMadeProduct(data.data?.result)
        }
        getMadeProduct()
    }, [update, updateDelete])

    const [productInfo, setProductInfo] = useState({
        productName: "",
        productColor: "#fff",
        productSize: "",
        productPrice: "",
        productCount: ""
    })

    const onChange = e => {
        const value = e.target.value;

        setProductInfo({...productInfo, [e.target.name]: value})
    }


    const onSubmit = async (e, productInfo) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("productInfo", JSON.stringify(productInfo))


        await adminCreateCardAPI.createNewAllProduct(formData, id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    setProductInfo({
                        productName: "",
                        productColor: "#fff",
                        productSize: "",
                        productPrice: "",
                        productCount: ""
                    })
                    setUpdate(prev => !prev)
                } else {
                    alert("При добавлении произошла ошибка")
                }
            })
    }


    return (
        <div className="create__card-details" style={{marginTop: '70px'}}>
            <form onSubmit={e => onSubmit(e, productInfo)} className="card__product-form">
                <CreateDetails onChange={onChange} productInfo={productInfo} />
            </form>
            <div className="create__card-flex">
                {madeProduct.map((product, index) => (
                   <div style={{marginBottom: '100px'}} className="card__product-form" key={index}>
                       <ShowDetails isUpdateDelete={isUpdateDelete} product={product} />
                   </div>
                ))}
            </div>
        </div>
    );
};

export default CreateCardDetails;