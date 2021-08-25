import axios from 'axios'
import { BASE_API_URL } from '@env'

const Api = axios.create({
    baseURL: BASE_API_URL
})

export async function registerApi(username, email, password) {
    try {
        const response = await Api.post('auth/local/register', {
            username: username,
            email: email,
            password: password
        })
        return response.data
    } catch(err) {
        return err.response.data.message[0].messages[0]
    }
}

export async function loginApi(email, password) {
    try {
        const response = await Api.post('auth/local', {
            identifier: email,
            password: password
        })
        return response.data
    } catch(err) {
        return err.response.data.message[0].messages[0]
    }
}

export async function getBillingApi(jwt) {
    try {
        const response = await Api.get('billings', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        const result = response.data
        if(result.length == 1) {
            return result
        }
        return null
    } catch (err) {
        return err.resposen.data.message[0].messages[0]
    }
}

export async function updateBillingApi(id, data = {}, jwt) {
    try {
        const response = await Api.put(`billings/${id}`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        return response.data
    } catch (err) {
        return err.response.data.message[0].messages[0]
    }
}

export async function createBillingApi(data = {}, jwt) {
    try {
        const response = await Api.post(`billings`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        return response.data
    } catch (err) {
        return err.response.data.message[0].messages[0]
    }
}

export async function changePasswordApi(newPassword, jwt) {
    try {
        const response = await Api.put('/users-permissions/users/update-password', {
            newPassword,
        }, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        return response.data
    } catch (err) {
        return err.response.data.message[0].messages[0]
    }
}

export default Api