import React, {useEffect, useState} from 'react';
import {Route, useNavigate, Routes} from "react-router-dom";


import './style/global.scss'
import './style/normalize.scss'

import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import {adminAuthAPI} from "./api/api";


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
                </Routes>
            </main>
        </div>
    );
};

export default App;