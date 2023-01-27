import React from 'react';
import CreateTitle from "../../components/create/title/create-title/CreateTitle";
import CreateTitleComplete from "../../components/create/title/create-title-complete/CreateTitleComplete";
import EditProductInfo from "../../components/edit-prodcut-info/EditProductInfo";

const EditProduct = () => {
    return (
        <>
            <CreateTitleComplete title={"Карточка Товара"} />
            <CreateTitle title="Изменить данные" subtitle="Измените дополнительную информацию о товаре" />
            <EditProductInfo />
        </>
    );
};

export default EditProduct;