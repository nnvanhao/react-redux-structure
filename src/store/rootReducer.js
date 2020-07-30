import { combineReducers } from 'redux';

import authReducer from '~/reducers/auth/authReducer';
import commonReducer from '~/reducers/commonReducer';

export default combineReducers({
    commonReducer,
    authReducer,
});
