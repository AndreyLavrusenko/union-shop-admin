import React, {useEffect, useState} from 'react';
import {adminGetProduct, adminUpdateCardAPI} from "../../../api/api";

import CategorySystemItem from "./CategorySystemItem";

import './category-system.scss'
import '../system.scss'


const CategorySystem = () => {
    const [category, setCategory] = useState(null)

    const [firstCategory, setFirstCategory] = useState(null);
    const [secondCategory, setSecondCategory] = useState(null);
    const [thirdCategory, setThirdCategory] = useState(null);

    const [categoryName, setCategoryName] = useState([])

    const [loading, setLoading] = useState(true)

    // Меняет цвет фона
    useEffect(() => {
        document.body.style.backgroundColor = "#000001";

        return () => {
            document.body.style.backgroundColor = "#FAFAFF";
        }
    }, [])


    useEffect(() => {
        const getCategory = async () => {
            // Получает все категории товаров для списка
            const {data} = await adminGetProduct.getProductCategory()
            setCategory(JSON.parse(data[0].allCategory));

            // Получение активных категорий
            const res = await adminGetProduct.getCategoryItem()
            setFirstCategory(res.data[0].category_1)
            setSecondCategory(res.data[0].category_2)
            setThirdCategory(res.data[0].category_3)

            // Получение название и описание категорий
            const categoryName = await adminGetProduct.getCategoryName()
            setCategoryName(categoryName.data[0])

            setLoading(false)
        }
        getCategory()
    }, [])


    const updateCategory = async (number, category) => {
        await adminUpdateCardAPI.changeCategoryType(number, category)
    }

    const updateCategoryInfo = async (number, info) => {
        await adminUpdateCardAPI.changeCategoryInfo(number, info)
    }


    if (loading) return


    return (
        <div className="system">
            <h1>Система</h1>

            <form>
                <CategorySystemItem
                    updateCategory={updateCategory}
                    updateCategoryInfo={updateCategoryInfo}
                    categories_name={categoryName.categories1_name}
                    categories_desc={categoryName.categories1_desc}
                    category={category}
                    categoryNumber={firstCategory}
                    number={1}
                />

                <CategorySystemItem
                    updateCategory={updateCategory}
                    updateCategoryInfo={updateCategoryInfo}
                    categories_name={categoryName.categories2_name}
                    categories_desc={categoryName.categories2_desc}
                    category={category}
                    categoryNumber={secondCategory}
                    number={2}
                />

                <CategorySystemItem
                    updateCategory={updateCategory}
                    updateCategoryInfo={updateCategoryInfo}
                    categories_name={categoryName.categories3_name}
                    categories_desc={categoryName.categories3_desc}
                    category={category}
                    categoryNumber={thirdCategory}
                    number={3}
                />

            </form>
        </div>
    );
};

export default CategorySystem;