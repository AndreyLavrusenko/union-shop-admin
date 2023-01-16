import React, {useEffect, useState} from 'react';
import {adminOrders} from "../../api/api";
import {useParams} from "react-router-dom";
import StatusInfo from "./status/StatusInfo";
import StatusProducts from "./status/statusProducts/StatusProducts";
import StatusDetails from "./status/StatusDetails/StatusDetails";

import './order-details.scss'

const OrderDetails = () => {
    const {id} = useParams()
    const [orderData, setOrderData] = useState([])


    useEffect(() => {
        const getOrderInfo = async () => {
            const {data} = await adminOrders.getOrderById(id)
            setOrderData(data)
        }
        getOrderInfo()
    }, [])

    if (orderData.length === 0) return


    return (
        <div className="status">
            <div className="status__wrapper">
                <StatusInfo orderId={orderData.result[0].id} orderStatus={orderData.result[0].status} />
                <StatusProducts orderProducts={orderData.arr} />
            </div>

            <StatusDetails orderDetails={orderData.result} />
        </div>
    );
};

export default OrderDetails;