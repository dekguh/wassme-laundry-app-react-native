export const UPDATE_IS_LOGIN = 'UPDATE_IS_LOGIN'
export const UPDATE_IS_LOADING = 'UPDATE_IS_LOADING'
export const CHECK_IS_LOGIN = 'CHECK_IS_LOGIN'
export const UPDATE_JWT = 'UPDATE_JWT'
export const UPDATE_BILLING = 'UPDATE_BILLING'
export const UPDATE_IS_BILLING = 'UPDATE_IS_BILLING'

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

export function updateJwtAct(jwt) {
    return {
        type: UPDATE_JWT,
        payload: jwt
    }
}

export function updateBillingAct(data) {
    return {
        type: UPDATE_BILLING,
        payload: data
    }
}

export function updateIsBillingAct(status) {
    return {
        type: UPDATE_IS_BILLING,
        payload: status
    }
}