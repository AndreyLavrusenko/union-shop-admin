import React, {useEffect, useState} from 'react';
import {adminGetProduct} from "../../api/api";
import ReactPaginate from "react-paginate";

import AllCardItem from "../../components/all-card-item/AllCardItem";

import '../all-product/all.scss'

const Archive = () => {
    const [products, setProducts] = useState([])

    const [page, setPage] = useState(0)
    const [pages, setPages] = useState(0)

    // Получение товаров из категорий или всех товаров сразу
    useEffect(() => {
        const getProducts = async () => {
            const result = await adminGetProduct.getArchiveProduct(null, page)
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
                    {products.length === 0
                        ? <h2 style={{textAlign: "center", width: "100%", fontSize: '39px'}}>Приват пустой</h2>
                        : products.map(item => {
                            return <AllCardItem
                                key={item.id}
                                link={'/create-list-product/'}
                                id={item.uniqCode}
                                title={item.title}
                                subtitle={item.description}
                                image={item.image}
                                isLogo={item.isLogo}
                                color={item.color}
                                subColor={item.subColor}
                                backgroundcolor={item.backgroundcolor}
                            />
                        })

                    }
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
    );
};

export default Archive;