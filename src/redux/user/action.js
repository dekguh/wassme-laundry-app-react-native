export const UPDATE_IS_LOGIN = 'UPDATE_IS_LOGIN'
export const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING'

export function updateIsLoginAct(status) {
    return {
        type: UPDATE_IS_LOGIN,
        payload: status
    }
}

export function updateIsLoadingAct(status) {
    return {
        type: UPDATE_IS_LOADING,
        payload: status
    }
}