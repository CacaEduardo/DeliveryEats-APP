import api from "../services/api"

export const createUser = async (userData) => {

    try {
        const response = await api.post('/user', {userData: userData})
        const { success } = response.data
        return success
    } catch (error) {
        console.log(error)
    }
}

export const doLogin = async (userData) => {
    try{
        const response = await api.post('/doLogin', { userData: userData })
        return response.data
    }catch(error){
        console.log(error)
    }
}

