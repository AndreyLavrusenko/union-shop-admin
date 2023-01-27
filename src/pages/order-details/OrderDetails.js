import React, {useEffect, useState} from 'react';
import {adminOrders} from "../../api/api";
import {useParams} from "react-router-dom";
import StatusInfo from "./status/StatusInfo";
import StatusProducts from "./status/statusProducts/StatusProducts";
import StatusDetails from "./status/StatusDetails/StatusDetails";

import './order-details.scss'
import EditOrder from "./edit-order/EditOrder";

const OrderDetails = () => {
    const {id} = useParams()
    const [orderData, setOrderData] = useState([])
    const [updateOrder, setUpdateOrder] = useState(false)


    useEffect(() => {
        const getOrderInfo = async () => {
            const {data} = await adminOrders.getOrderById(id)
            setOrderData(data)
        }
        getOrderInfo()
    }, [updateOrder])


    const changeOrderStatus = async (id, value) => {
        await adminOrders.updateOrderStatus(id, value)
        setUpdateOrder(prev => !prev)
    }

    const saveTrackNumber = async (id, value) => {
        await adminOrders.updateOrderTrackNumber(id, value)
    }

    if (orderData.length === 0) return


    return (
        <div className="status">
            <div className="status__wrapper">
                <StatusInfo orderId={orderData.result[0].id} orderStatus={orderData.result[0].status} />
                <StatusProducts orderProducts={orderData.arr} />
            </div>

            <StatusDetails orderDetails={orderData.result} />
            <EditOrder saveTrackNumber={saveTrackNumber} changeOrderStatus={changeOrderStatus} orderDetails={orderData.result} />
        </div>
    );
};

export default OrderDetails;