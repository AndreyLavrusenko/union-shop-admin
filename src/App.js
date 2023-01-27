import React, {useEffect, useState} from 'react';
import {Route, useNavigate, Routes} from "react-router-dom";
import {adminAuthAPI} from "./api/api";


import './style/global.scss'
import './style/normalize.scss'

import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import CreateCategory from "./pages/create-category/CreateCategory";
import CreateProduct from "./pages/create-product/CreateProduct";
import CreateListProduct from "./pages/create-list-product/CreateListProduct";
import AllProduct from "./pages/all-product/AllProduct";
import CreateProductDetails from "./pages/create-product-details/CreateProductDetails";
import DeleteProduct from "./pages/delete-product/DeleteProduct";
import OpenAccessProduct from "./pages/open-access-product/OpenAccessProduct";
import CloseAccessProduct from "./pages/close-access-product/CloseAccessProduct";
import CategorySystem from "./pages/system/category-system/CategorySystem";
import Archive from "./pages/archive/Archive";
import AddToTop from "./pages/add-to-top/AddToTop";
import QuickViewContainer from "./pages/quick-view/QuickViewContainer";
import Orders from "./pages/orders/Orders";
import OrderDetails from "./pages/order-details/OrderDetails";
import Edit from "./pages/edit/Edit";
import EditMainProduct from "./pages/edit/EditMainProduct";
import EditProduct from "./pages/edit-product/EditProduct";


const App = () => {
    const navigate = useNavigate()

    // Проверят подходит ли ключ администратора
    useEffect(() => {
        const adminIsAuth = async () => {
            const res = await adminAuthAPI.checkAdminLogin()
            if (res?.resultCode !== 0) {
                navigate('/admin-login')
            }
        }

        adminIsAuth()
    }, [])


    return (
        <div className="wrapper">
            <Header/>
            <main className="container">
                <Routes>
                    <Route path="/admin-login" element={<Login/>}/>
                    <Route path="/" element={<Admin/>}/>
                    <Route path="/create-category" element={<CreateCategory/>}/>
                    <Route path="/create-product" element={<CreateProduct/>}/>
                    <Route path="/create-product-details/:id" element={<CreateProductDetails/>}/>
                    <Route path="/create-list-product" element={<CreateListProduct/>}/>
                    <Route path="/all-product" element={<AllProduct/>}/>
                    <Route path="/archive" element={<Archive/>}/>
                    <Route path="/add-to-top" element={<AddToTop/>}/>
                    <Route path="/quick-view" element={<QuickViewContainer/>}/>
                    <Route path="/delete-product" element={<DeleteProduct/>}/>
                    <Route path="/open-access-product" element={<OpenAccessProduct/>}/>
                    <Route path="/close-access-product" element={<CloseAccessProduct/>}/>
                    <Route path="/system/system-category" element={<CategorySystem/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/order-details/:id" element={<OrderDetails/>}/>
                    <Route path="/edit" element={<Edit/>} />
                    <Route path="/edit/main-product" element={<EditMainProduct />}/>
                    <Route path="/edit-product" element={<EditProduct />}/>
                </Routes>
            </main>
        </div>
    );
};

export default App;