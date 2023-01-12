import React from 'react';
import './create-list-product.scss'
import CreateTitleComplete from "../../components/create/title/create-title-complete/CreateTitleComplete";
import ChoiceCard from "../../components/choice-card/ChoiceCard";


const CreateListProduct = () => {
    return (
        <div>
            <CreateTitleComplete title={"Категория Товара"} />
            <CreateTitleComplete title={"Карточка Товара"}  />
            <div className="choice">
                <ChoiceCard link={`/create-product-details/${localStorage.getItem("uniqCode")}`} title="Добавить товар" subtitle="Детали товара" bgColor="#000001" color="#FAF4E6" />
                <ChoiceCard link={"/"} title="Открытый доступ" subtitle="Опубликовать товар в магазине прямо сейчас" bgColor="#000001" color="#FAF4E6" />
                <ChoiceCard link={"/"} title="Отложить в Приват" bgColor="#000001" color="#FAF4E6" />
                <ChoiceCard link={"/"} title="Товар партнеров" subtitle="Распределить проценты" bgColor="#000001" color="#FAF4E6" />
                <ChoiceCard link={"/"} title="Завершить добавление" bgColor="#1468E7" color="#FAF4E6" />
            </div>
        </div>
    );
};

export default CreateListProduct;