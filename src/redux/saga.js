import AsyncStorage from '@react-native-async-storage/async-storage'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getBillingApi } from '../Api'
import { CHECK_IS_LOGIN,
    updateBillingAct,
    updateIsBillingAct,
    updateIsLoadingAct,
    updateIsLoginAct,
    updateJwtAct } from './user/action'

function* watchCheckLoginSaga() {
    try {
        const jwt = yield call(AsyncStorage.getItem, '@jwt')
        if(jwt) {
            yield put(updateIsLoginAct(true))
            yield put(updateIsLoadingAct(false))
            yield put(updateJwtAct(jwt))

            const billing = yield call(getBillingApi, jwt)
            if(billing != null && billing.length) {
                yield put(updateBillingAct(billing[0]))
                yield put(updateIsBillingAct(true))
            } else {
                yield put(updateBillingAct(null))
                yield put(updateIsBillingAct(false))
            }
        }
        if(!jwt) {
            yield put(updateIsLoginAct(false))
            yield put(updateIsLoadingAct(false))
            yield put(updateJwtAct(null))
            yield put(updateBillingAct(null))
            yield put(updateIsBillingAct(false))
        }
    } catch (err) {
        yield put(updateIsLoginAct(false))
        yield put(updateIsLoadingAct(false))
        yield put(updateJwtAct(null))
        yield put(updateBillingAct(null))
        yield put(updateIsBillingAct(false))
    }
}

export function* rootSaga() {
    yield takeEvery(CHECK_IS_LOGIN, watchCheckLoginSaga)
}