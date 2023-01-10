import React, {useEffect, useState} from 'react';
import {adminGetCardAPI} from "../../api/api";
import AllCardItem from "../../components/all-card-item/AllCardItem";

import './all.scss'

const AllProduct = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            const result = await adminGetCardAPI.getAllCardFromProduct()
            setProducts(result.data)
            setLoading(false)
        }
        getProducts()
    }, [])

    if (loading) return


    return (
        <div className="all">
            <div className="all__card">
                {products.map(item => {
                    return <AllCardItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        isLogo={item.isLogo}
                        color={item.color}
                        subColor={item.subColor}
                        backgroundcolor={item.backgroundcolor}
                    />
                })}
            </div>
        </div>
    )
};

export default AllProduct;