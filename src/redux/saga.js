import AsyncStorage from '@react-native-async-storage/async-storage'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getJwtStorage } from '../storage'
import { CHECK_IS_LOGIN, updateIsLoadingAct, updateIsLoginAct } from './user/action'

function* watchCheckLoginSaga() {
    try {
        const jwt = yield call(AsyncStorage.getItem, '@jwt')
        if(jwt) {
            yield put(updateIsLoginAct(true))
            yield put(updateIsLoadingAct(false))
        }
        if(!jwt) {
            yield put(updateIsLoginAct(false))
            yield put(updateIsLoadingAct(false))
        }
    } catch (err) {
        yield put(updateIsLoginAct(false))
        yield put(updateIsLoadingAct(false))
    }
}

export function* rootSaga() {
    yield takeEvery(CHECK_IS_LOGIN, watchCheckLoginSaga)
}