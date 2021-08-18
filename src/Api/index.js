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

export default Api