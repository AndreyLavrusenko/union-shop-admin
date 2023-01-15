import React from 'react';
import ChoiceCard from "../../components/choice-card/ChoiceCard";

import './admin.scss'

import tshirt from '../../assets/img/card/tshirt.png'
import orders from '../../assets/img/card/orders.png'
import logo from '../../assets/img/logo/logo-white.svg'
import bid from '../../assets/img/card/bid.svg'


const Admin = () => {
    return (
        <div className="choice">
            <ChoiceCard link={"/create-category"} title="Добавить" subtitle="В магазин" bgColor="#000001" color="#FAF4E6" img={tshirt}/>
            <ChoiceCard link={"/all-product"} title="Все товары" subtitle="Добавить данные" bgColor="#000001" color="#FAF4E6"/>
            <ChoiceCard link={"/delete-product"} title="Убрать" subtitle="Из магазина" bgColor="#000001" color="#FAF4E6"/>
            <ChoiceCard link={"/"} title="Редактировать" subtitle="Ассортимент" bgColor="#000001" color="#FAF4E6" fontSize={36}/>
            <ChoiceCard link={"/system/system-category"} title="Система" subtitle="Найстройки" bgColor="#000001" color="#FAF4E6" img={logo}/>
            <ChoiceCard link={"/"} title="Заказы" subtitle="Просмотреть заказы" bgColor="#FAF4E6" color="#000001" img={orders}/>
            <ChoiceCard link={"/"} title="Заявки" subtitle="Просмотреть заявки" bgColor="#FAF4E6" color="#000001" img={bid}/>
        </div>
    );
};

export default Admin;