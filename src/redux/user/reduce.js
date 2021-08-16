import { UPDATE_IS_LOADING, UPDATE_IS_LOGIN } from './action'

const initState = {
    isLogin: false,
    isLoading: true
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
        default:
            return state
    }
}