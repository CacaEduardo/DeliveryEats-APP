import api from "../services/api"

export const orders = async (user_id) => {
    try {
        const response = await api.get(`/order/user/${user_id}`)
        const { data } = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createOrder = async (orderData) => {
    try {
        const response = await api.post('/order', {order: orderData})
        const { success } = response.data
        return success
    } catch (error) {
        console.log(error)
    }
}
