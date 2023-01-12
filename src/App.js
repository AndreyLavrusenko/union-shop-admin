import React, {useEffect, useState} from 'react';
import {Route, useNavigate, Routes} from "react-router-dom";


import './style/global.scss'
import './style/normalize.scss'

import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import {adminAuthAPI} from "./api/api";
import Admin from "./pages/admin/Admin";
import CreateCategory from "./pages/create-category/CreateCategory";
import CreateProduct from "./pages/create-product/CreateProduct";
import CreateListProduct from "./pages/create-list-product/CreateListProduct";
import AllProduct from "./pages/all-product/AllProduct";
import CreateProductDetails from "./pages/create-product-details/CreateProductDetails";
import DeleteProduct from "./pages/delete-product/DeleteProduct";


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
                    <Route path="/" element={<Admin />}/>
                    <Route path="/create-category" element={<CreateCategory />} />
                    <Route path="/create-product" element={<CreateProduct />}/>
                    <Route path="/create-product-details/:id" element={<CreateProductDetails />}/>
                    <Route path="/create-list-product" element={<CreateListProduct />}/>
                    <Route path="/all-product" element={<AllProduct />}/>
                    <Route path="/delete-product" element={<DeleteProduct />}/>
                </Routes>
            </main>
        </div>
    );
};

export default App;