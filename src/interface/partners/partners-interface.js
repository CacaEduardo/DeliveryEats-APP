import api from "../services/api"

export const partners = async () => {
    try {
        const response = await api.get(`/partners`)
        const { data } = response.data
        return data
    } catch (error) {
        console.log(error)
    }
}

