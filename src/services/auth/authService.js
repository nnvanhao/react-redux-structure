import HTTP from '~/utils/http';
import { API_ROUTES } from '~/constants/apiRoutes';
import * as apiUtils from '~/utils/apiUtils';

export async function signIn(data) {
    const path = apiUtils.getApiPath(API_ROUTES.SIGN_IN);
    const result = await HTTP.post(path, data);
    return result;
}
