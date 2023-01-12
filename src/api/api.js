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
    },

    // Создание записи в таблице all_products
    createNewAllProduct: async (data, id) => {
        try {
            return await instance.post(`create/create-all-product/${id}`, data, {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            })
        } catch (err) {}
    },

    // Получение товаров из all_products по uniqCode
    getNewAllProduct: async (id) => {
        try {
            return await instance.get(`create/get-all-product/${id}`, {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            })
        } catch (err) {}
    }
}


export const adminGetCardAPI = {
    // Получение карточек товара
    getAllCardFromProduct: async () => {
        try {
            return await instance.get('product/all')
        } catch (err) {}
    },

    getAllCardWithCategory: async (category, page) => {
        const {data} = await instance.get(category
            ? `product/shop?category=${category}`
            : `product/shop?page=${page}`
        )

        return data
    },
}

export const adminDeleteCardAPI = {
    // Полное удаление товара (product, all_products)
    deleteProduct: async (id) => {
        await instance.delete(`remove/remove-product/${id}`, {
            headers: {
                token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
            }
        })
    },
    // Полное удаление товара только из all_products
    deleteProductItem: async (id) => {
        await instance.delete(`remove/remove-product-item/${id}`, {
            headers: {
                token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
            }
        })
    }
}