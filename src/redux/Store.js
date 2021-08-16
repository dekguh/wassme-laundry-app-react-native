import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './saga'
import { default as userReducer } from './user/reduce'

let sagaMiddleware = createSagaMiddleware()
const middleware = [logger, sagaMiddleware]

const allReducers = combineReducers({
    user: userReducer
})

const Store = createStore(allReducers, applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)

export default Store