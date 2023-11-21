import api from "../services/api"

export const food = async () => {
    try {
        const response = await api.get('/food')
        const { data } = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const favoriteFood = async () => {
    try {
        const response = await api.get('/food/favorites')
        const { data } = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}
