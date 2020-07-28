import * as ACTIONS_TYPES from '~/constants/actionsTypes';

export function signIn(payload) {
    return {
        type: ACTIONS_TYPES.SIGN_IN,
        payload,
    };
}
