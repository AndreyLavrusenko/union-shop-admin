import React from 'react';
import './create-product.scss'
import CreateTitleComplete from "../../components/create/title/create-title-complete/CreateTitleComplete";
import CreateTitle from "../../components/create/title/create-title/CreateTitle";
import CreateCard from "../../components/create/create-card/CreateCard";

const CreateProduct = () => {
    return (
        <>
            <CreateTitleComplete title={"Категория Товара"} />
            <CreateTitle title="Карточка Товара" subtitle="Заполните карточку товара" />
            <CreateCard />
        </>
    );
};

export default CreateProduct;