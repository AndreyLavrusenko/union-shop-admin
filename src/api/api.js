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
        } catch (err) {
        }
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
        } catch (err) {
        }
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
        } catch (err) {
        }
    },

    // Создание записи в таблице all_products
    createNewAllProduct: async (data, id) => {
        try {
            return await instance.post(`create/create-all-product/${id}`, data, {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            })
        } catch (err) {
        }
    },

    // Получение товаров из all_products по uniqCode
    getNewAllProduct: async (id) => {
        try {
            return await instance.get(`create/get-all-product/${id}`, {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            })
        } catch (err) {
        }
    },

    createNewCategory: async (data) => {
        try {
            return await instance.put('create/create-new-category', data, {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            })
        } catch {}
    }
}


export const adminGetCardAPI = {
    // Получение карточек товара
    getAllCardFromProduct: async () => {
        try {
            return await instance.get('product/all')
        } catch (err) {
        }
    },

    getAllCardWithCategory: async (category, page) => {
        const {data} = await instance.get(category
                ? `get/shop-admin?category=${category}`
                : `get/shop-admin?page=${page}`, {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            }
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
    },

    // Удаление категории из system
    deleteCategorySystem: async (word) => {
        await instance.delete(`remove/remove-category-item/${word}`, {
            headers: {
                token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
            }
        })
    }
}


export const adminGetProduct = {
    // Получить товар по id
    getProductById: async (id) => {
        try {
            return await instance.get(`product/product/${id}`)
        } catch {
        }
    },

    // Обновление состояния
    updateVisibleTrue: async (id, status) => {
        try {
            return await instance.put(`create/update-visible/${id}`, {status}, {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            })
        } catch {
        }
    },

    getProductCategory: async () => {
        return await instance.get('get/category-product', {
            headers: {
                token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
            }
        })
    },

    getCategoryItem: async () => {
        return await instance.get('get/category-item', {
            headers: {
                token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
            }
        })
    },

    getCategoryName: async () => {
        return await instance.get('get/category-name', {
            headers: {
                token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
            }
        })
    },

    getArchiveProduct: async (category, page) => {
        const {data} = await instance.get(category
                ? `/get/archive?category=${category}`
                : `/get/archive?page=${page}`, {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            }
        )

        return data
    },
}


export const adminUpdateCardAPI = {
    changeCategoryType: async (number, category) => {
        return await instance.put('put/change-category-type', {number, category}, {
            headers: {
                token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
            }
        })
    },

    changeCategoryInfo: async (number, info) => {
        return await instance.put('put/change-category-info', {number, info}, {
            headers: {
                token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
            }
        })
    },

    // Обновление состояния
    updateTopState: async (id, status) => {
        try {
            return await instance.put(`put/remove-add-top/${id}`, {status}, {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            })
        } catch {
        }
    },

    updateCardProduct: async (id, data) => {
        try {
            return await instance.put(`put/update-product-info`, {id, data}, {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
}


export const adminOrders = {
    getOrdersByType: async (type) => {
        try {
            return await instance.get(`get/orders-admin/${type}`, {
                headers: {
                    token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
                }
            })
        } catch {}
    },

    getOrderById: async (id) => {
        return await instance.get(`get/order-admin/${id}`, {
            headers: {
                token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
            }
        })
    },

    updateOrderStatus: async (id, value) => {
        return await instance.put(`put/update-order-status`, {id, value}, {
            headers: {
                token: `Bearer ${localStorage.getItem("unionAdminKey9512")}`
            }
        })
    }
}