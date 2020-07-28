import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '~/services/history';
import * as authService from '~/services/auth/authService';
import * as ACTIONS_TYPES from '~/constants/actionsTypes';
import * as REDUCERS_TYPES from '~/constants/reducersTypes';

export function* signIn({ payload }) {
    const response = yield call(authService.signIn, payload);

    yield put({
        type: REDUCERS_TYPES.SIGN_IN,
        payload: response,
    });
}

export default all([
    takeLatest(ACTIONS_TYPES.SIGN_IN, signIn),
]);
