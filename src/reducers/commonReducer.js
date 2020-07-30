import produce from 'immer';
import * as REDUCERS_TYPES from '~/constants/reducersTypes';

const INITIAL_STATE = {
    isLoading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case REDUCERS_TYPES.LOADING: {
                draft.isLoading = action.isLoading;
                break;
            }

            default:
        }
    });
}
