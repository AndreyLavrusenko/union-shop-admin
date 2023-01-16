import React from 'react';
import {NavLink} from "react-router-dom";

const OrderItem = ({item}) => {
    return (
        <NavLink to={`/order-details/${item.id}`} key={item.id} className="order__card">
            <h4>Заказ {item.id}</h4>
            <div className="order__card-info">
                <div><span>Дата создания:</span>{item?.orderDate?.split('T')[0]}</div>
                <div><span>Способ получения:</span>{item.deliveryType === 'delivery' ? "Доставка" : "Самовывоз"}</div>
                <div><span>Тип доставки:</span>{item.deliverTypeDetails}</div>
                <div><span>Email:</span>{item.email}</div>
            </div>
        </NavLink>
    );
};

export default OrderItem;