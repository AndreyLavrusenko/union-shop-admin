import React, {useEffect, useState} from 'react';

import './order.scss'
import {adminOrders} from "../../api/api";
import {NavLink} from "react-router-dom";
import OrderItem from "./order-item/OrderItem";

const Orders = () => {
    const [performed, setPerformed] = useState([])
    const [sent, setSent] = useState([])
    const [delivered, setDelivered] = useState([])

    const [loading, setLoading] = useState(true)

    const getOrderByType = async (type) => {
        return await adminOrders.getOrdersByType(type)
    }

    useEffect(() => {
        getOrderByType('performed').then(res => setPerformed(res.data.result))
        getOrderByType('sent').then(res => setSent(res.data.result))
        getOrderByType('delivered').then(res => setDelivered(res.data.result))

        setLoading(false)
    }, [])


    if (loading) return


    return (
        <div className="order">
            <section className="order__container">
                <h2>Оплаченные заказы</h2>
                <div className="order__wrapper">
                    {performed.map(item => (
                        <OrderItem item={item} />
                    ))}
                </div>
            </section>


            <section className="order__container">
                <h2>Отправленные заказы</h2>
                <div className="order__wrapper">
                    {sent.map(item => (
                        <OrderItem item={item} />
                    ))}

                </div>
            </section>


            <section className="order__container">
                <h2>Доставленные заказы</h2>
                <div className="order__wrapper">
                    {delivered.map(item => (
                        <OrderItem item={item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Orders;