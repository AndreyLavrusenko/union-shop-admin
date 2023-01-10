import axios from "axios";

let TOKEN = ""

if (localStorage.getItem("persist:root")) {
    if (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser) {
        TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
    }
}


const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BACK_URL,
})



export const adminAuthAPI = {
    // Вход в админку
    loginAdmin: async (user) => {
        try {
            const {data} = await instance.post('auth/admin-auth', user)
            return data
        } catch (err) {}
    },

    // Проверяет подходит ли ключ администратора
    checkAdminLogin: async () => {
        try {
            const {data} = await instance.get('auth/admin-check-auth', {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            })
            return data
        } catch (err) {}
    }
}


export const adminCreateCardAPI = {
    // Создание записи в таблице product
    createNewProduct: async (data) => {
        try {
            return await instance.post('create/create-product', data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            });
        } catch (err) {}
    }
}


export const adminGetCardAPI = {
    // Получение карточек товара
    getAllCardFromProduct: async () => {
        try {
            return await instance.get('product/all')
        } catch (err) {}
    }
}