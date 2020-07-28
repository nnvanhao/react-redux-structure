import Cookies from 'js-cookie'
import { OBJECT_TYPE } from '~/constants/common';
import * as COOKIE_KEYS from '~/constants/cookieKeys';

export function setAuthCookie(auth, expires = 1) {
    return Cookies.set(COOKIE_KEYS.AUTH, auth, { expires });
}

export function getAuthCookie(key, type) {
    if (type === OBJECT_TYPE.JSON) {
        return Cookies.getJSON(key);
    }
    return Cookies.get(key);
}

export function removeAuthCookie(key) {
    return Cookies.remove(key);
}