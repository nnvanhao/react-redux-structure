import { all } from 'redux-saga/effects';

import auth from '~/models/auth/authModel';

export default function* rootSaga() {
    return yield all([auth]);
}
