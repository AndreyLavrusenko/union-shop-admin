import React from 'react';
import CreateTitleComplete from "../../components/create/title/create-title-complete/CreateTitleComplete";
import CreateTitle from "../../components/create/title/create-title/CreateTitle";
import CreateCardDetails from "../../components/create/create-card-details/CreateCardDetails";

const CreateProductDetails = () => {
    return (
        <>
            <CreateTitleComplete title={"Карточка Товара"} />
            <CreateTitle title="Дополнительные сведения" subtitle="Заполните дополнительную информацию о товаре" />
            <CreateCardDetails />
        </>
    );
};

export default CreateProductDetails;