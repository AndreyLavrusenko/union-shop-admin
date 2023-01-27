import React, {useEffect, useState} from 'react';
import {adminCreateCardAPI} from "../../api/api";
import EditProductInput from "./EditProductInput";

import '../create/create-card/create-card-input/create-card-input.scss'
import '../create/create-card-details/create-card-details.scss'


const EditProductInfo = () => {
    const id = localStorage.getItem("uniqCode")
    const [madeProduct, setMadeProduct] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        const getMadeProduct = async () => {
            const data = await adminCreateCardAPI.getNewAllProduct(id)
            setMadeProduct(data.data?.result)
        }
        getMadeProduct()
    }, [update])


    return (
        <>
            <div className="create__card-details" style={{marginTop: '70px'}}>
                <div className="create__card-flex">
                    {madeProduct.map((product, index) => (
                        <div style={{marginBottom: '100px'}} className="card__product-form" key={index}>
                            <EditProductInput setUpdate={setUpdate} product={product} index={index} />
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default EditProductInfo;