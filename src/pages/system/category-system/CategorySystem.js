import React, {useEffect, useState} from 'react';
import {adminDeleteCardAPI, adminGetProduct, adminUpdateCardAPI} from "../../../api/api";

import CategorySystemItem from "./category-system-item/CategorySystemItem";

import './category-system-item/category-system-item.scss'
import '../system.scss'
import CategorySystemNew from "./category-system-new/CategorySystemNew";
import CategorySystemDelete from "./category-system-delete/CategorySystemDelete";


const CategorySystem = () => {
    const [category, setCategory] = useState(null)

    const [firstCategory, setFirstCategory] = useState(null);
    const [secondCategory, setSecondCategory] = useState(null);
    const [thirdCategory, setThirdCategory] = useState(null);

    const [categoryName, setCategoryName] = useState([])

    const [loading, setLoading] = useState(true)
    const [updateState, setUpdateState] = useState(false)
    const [rerenderList, setRerenderList] = useState(false)

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
    }, [updateState, rerenderList])


    const updateCategory = async (number, category) => {
        await adminUpdateCardAPI.changeCategoryType(number, category)
    }

    const updateCategoryInfo = async (number, info) => {
        await adminUpdateCardAPI.changeCategoryInfo(number, info)
    }

    const removeSystem = async (e, word) => {
        e.preventDefault()

        await adminDeleteCardAPI.deleteCategorySystem(word)

        setRerenderList(prev => !prev)
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

                <CategorySystemNew setUpdateState={setUpdateState} />

                <CategorySystemDelete removeSystem={removeSystem} category={category} />

            </form>
        </div>
    );
};

export default CategorySystem;