import React, {useEffect, useState} from 'react';
import {adminGetCardAPI} from "../../api/api";
import AllCardItem from "../../components/all-card-item/AllCardItem";
import ReactPaginate from "react-paginate";

import '../all-product/all.scss'

const Edit = () => {
    const [products, setProducts] = useState([])

    const [page, setPage] = useState(0)
    const [pages, setPages] = useState(0)

    // Получение товаров из категорий или всех товаров сразу
    useEffect(() => {
        const getProducts = async () => {
            const result = await adminGetCardAPI.getAllCardWithCategory(null, page)
            setProducts(result.result)
            // Значения для пагинации
            setPage(+result.page)
            setPages(result.totalPage)

        }
        getProducts()
    }, [page])


    const changePage = ({selected: selectedPage}) => {
        setPage(selectedPage)
    }


    return (
        <>
            <div className="all">
                <div className="all__card">
                    {products.map(item => {
                        return <AllCardItem
                            key={item.id}
                            link={'/edit/main-product'}
                            id={item.uniqCode}
                            title={item.title}
                            subtitle={item.description}
                            image={item.image}
                            isLogo={item.isLogo}
                            color={item.color}
                            subColor={item.subColor}
                            backgroundcolor={item.backgroundcolor}
                        />
                    })}
                </div>
            </div>
            <div className="pagination">
                <ReactPaginate
                    previousLabel={"Назад"}
                    nextLabel={"Вперед"}
                    pageCount={pages}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </div>
        </>
    )
};

export default Edit;