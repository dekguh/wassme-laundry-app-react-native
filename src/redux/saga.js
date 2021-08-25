import AsyncStorage from '@react-native-async-storage/async-storage'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getBillingApi } from '../Api'
import { CHECK_IS_LOGIN,
    CLEAR_ALL_GLOBAL_STATE,
    updateBillingAct,
    updateDataUserAct,
    updateIsBillingAct,
    updateIsLoadingAct,
    updateIsLoginAct,
    updateJwtAct } from './user/action'

function* watchCheckLoginSaga() {
    try {
        const jwt = yield call(AsyncStorage.getItem, '@jwt')
        const dataUser = yield call(AsyncStorage.getItem, '@dataUser')
        if(jwt) {
            yield put(updateIsLoginAct(true))
            yield put(updateIsLoadingAct(false))
            yield put(updateJwtAct(jwt))
            yield put(updateDataUserAct(JSON.parse(dataUser)))

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
            yield put(updateDataUserAct(null))
        }
    } catch (err) {
        yield put(updateIsLoginAct(false))
        yield put(updateIsLoadingAct(false))
        yield put(updateJwtAct(null))
        yield put(updateBillingAct(null))
        yield put(updateIsBillingAct(false))
        yield put(updateDataUserAct(null))
    }
}

function* clearAllStateSaga() {
    yield put(updateIsLoginAct(false))
    yield put(updateIsLoadingAct(false))
    yield put(updateJwtAct(null))
    yield put(updateBillingAct(null))
    yield put(updateIsBillingAct(false))
    yield put(updateDataUserAct(null))
}

export function* rootSaga() {
    yield takeEvery(CHECK_IS_LOGIN, watchCheckLoginSaga)
    yield takeEvery(CLEAR_ALL_GLOBAL_STATE, clearAllStateSaga)
}