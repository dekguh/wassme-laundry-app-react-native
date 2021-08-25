import AsyncStorage from '@react-native-async-storage/async-storage'

export async function setJwtStorage(jwt) {
    try {
        await AsyncStorage.setItem('@jwt', jwt)
    } catch(err) {
        return null
    }
}

export async function setDataUserStorage(data) {
    try {
        await AsyncStorage.setItem('@dataUser', data)
    } catch(err) {
        return null
    }
}

export async function removeJwtStorage() {
    try {
        await AsyncStorage.removeItem('@jwt')
    } catch(err) {
        return null
    }
}

export async function getJwtStorage() {
    try {
        const jwt = await AsyncStorage.getItem('@jwt')
        return jwt
    } catch(err) {
        return null
    }
}