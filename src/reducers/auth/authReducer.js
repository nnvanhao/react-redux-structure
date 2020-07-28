import produce from 'immer';
import * as REDUCERS_TYPES from '~/constants/reducersTypes';

const INITIAL_STATE = {
    loading: false,
    profile: null,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case REDUCERS_TYPES.SIGN_IN: {
                draft.loading = true;
                draft.profile = action.payload.user;
                break;
            }

            default:
        }
    });
}
