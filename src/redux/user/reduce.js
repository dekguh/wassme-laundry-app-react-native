import { UPDATE_BILLING,
    UPDATE_IS_BILLING,
    UPDATE_IS_LOADING,
    UPDATE_IS_LOGIN,
    UPDATE_JWT } from './action'

const initState = {
    isLogin: false,
    isLoading: true,
    jwt: null,
    billing: null,
    isBilling: null
}

export default reduce = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_IS_LOGIN:
            return {
                ...state,
                isLogin: action.payload
            }
        case UPDATE_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case UPDATE_JWT:
            return {
                ...state,
                jwt: action.payload
            }
        case UPDATE_BILLING:
            return {
                ...state,
                billing: action.payload
            }
        case UPDATE_IS_BILLING:
            return {
                ...state,
                isBilling: action.payload
            }
        default:
            return state
    }
}